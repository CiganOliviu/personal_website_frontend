import React from 'react';
import './App.css';

function Header() {
  return (
    <div className = "container" style = {{
        backgroundColor: 'black',
        width: '100%',
        height: '10%',
        background: 'rgba(0, 0, 0, 0.9)'
      }}>
      <div className = "col-lg-11">
      <header className = "head-component">
          <h3 className = "brand" style = {{
              align: 'left',
              color: '#ffffff',
              fontFamily: 'Lobster'
            }}>
            Cigan Oliviu-David
          </h3>
      </header>
      </div>
      <div className = "col-md-1">
        <header class = 'head-component'>
          <i id = "facebook" class = "fa fa-facebook-official" aria-hidden = "true"></i>
          <i id = "instagram" class = "fa fa-instagram" aria-hidden = "true"></i>
          <i id = "youtube" class = "fa fa-youtube-play" aria-hidden = "true"></i>
        </header>
      </div>
    </div>
  );
}

export default Header;
