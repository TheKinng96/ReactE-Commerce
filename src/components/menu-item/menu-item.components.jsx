import React from 'react';
import { withRouter } from 'react-router-dom';

//withRouter will powerup the function, let the props can be accessed anywhere from the route

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    {/* to clarify which link to direct to, match is needed for the linkUrl */}
      <div 
        className="background-image" 
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">GET NOW</span>
      </div>
  </div>
);

export default withRouter(MenuItem);