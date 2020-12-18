import React from 'react';
import { Button } from 'react-bootstrap'
 
import { NavLink } from 'react-router-dom';

import '../style/navigation.css'
 
const Navigation = () => {
    return (
       <div className="navbar">
          <div className="nav-items">
            <NavLink to="/" className="nav-item">Home</NavLink>{' '}
            <NavLink to="/rate" className="nav-item">Rate</NavLink>{' '}
            <NavLink to="/attribute" className="nav-item">Attribute</NavLink>{' '}
          </div>
       </div>
    );
}
 
export default Navigation;