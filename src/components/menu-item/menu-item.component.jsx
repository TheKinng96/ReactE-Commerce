import React from 'react';
import { withRouter } from 'react-router-dom';

//withRouter will powerup the function, let the props can be accessed anywhere from the route

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    {/* to clarify which link to direct to, match is needed for the linkUrl */}
      <BackgroundImageContainer 
        className="background-image" 
        imageUrl={imageUrl}
      />
      <ContentContainer>
          <ContentTitle>{title.toUpperCase()}</ContentTitle>
          <ContentSubtitle>GET NOW</ContentSubtitle>
      </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);