import './style.header.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => {
 return(
 <div className='Header'>
        <nav>
        <NavLink to="/acercade"><li>Acerca de</li></NavLink>
          <li><a href='#'>Home</a></li>
        </nav>
    </div>
 )
}

export { Header }
