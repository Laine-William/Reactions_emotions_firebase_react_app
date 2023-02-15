import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    
    <header className="site-header">
      <nav>
        <NavLink to = "/Index">
          <a href="Index" className="link-home">Emotion data</a>
        </NavLink>
            
        <NavLink to = "/AjustWebcam">
          <a href="ajust-webcam">Ajustement webcam</a>
        </NavLink>

        <NavLink to = "/Data">
          <a href="Data">Data</a>
        </NavLink>
        </nav>
    </header>
  )
}

export default Header;
