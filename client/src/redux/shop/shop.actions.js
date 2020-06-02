import ShopActionTypes from './shop.types'

import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = collectionsMap =>({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart()); //turn false to true and start fetching

    // method 1: firebase only
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{ 
    //   const collectionsMap = co nvertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading:false});
    // });

    //method 2 for non firebase API
    collectionRef.get().then(snapshot =>{ 
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionFailure(error.message)));

    //method 3: fetching
    // fetch('https://firestore.googleapis.com/v1/projects/kinngstore-7c58c/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections));
    //very nesty to get the item value and id...
  }
}