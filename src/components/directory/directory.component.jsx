import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles'
//directory needs to store state value of menu items which use to pass and create menu item component
const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {
      sections.map( ({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />
        //{title, imageUrl, id, size, linkUrl} => othersectionprops will take care of the duplicate name props in the callingout function
        //those value in the function will be called automatically through the data
        ))
    }
  </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);