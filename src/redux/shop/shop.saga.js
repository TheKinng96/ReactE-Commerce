import { takeEvery, call,put } from 'redux-saga/effects';
//call: invokes methods, when a took too long then b
//put: creating action

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import {
  fetchCollectionSuccess,
  fetchCollectionFailure
} from './shop.actions'

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  yield console.log('I am fired');

  try{
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
    yield put(fetchCollectionSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionFailure(error.message))
  }
  
    // method 1: firebase only
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{ 
    //   const collectionsMap = co nvertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading:false});
    // });

    //method 2 for non firebase API
    // collectionRef.get().then(snapshot =>{ 
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   dispatch(fetchCollectionSuccess(collectionsMap));
    // }).catch(error => dispatch(fetchCollectionFailure(error.message)));

    //method 3: fetching
    // fetch('https://firestore.googleapis.com/v1/projects/kinngstore-7c58c/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections));
    //very nesty to get the item value and id...
}

export function* fetchCollectionsStart(){
  yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}