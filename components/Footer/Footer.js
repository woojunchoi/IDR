import React, { Component } from 'react';
import styles from './Footer.css';
import logo from '../../test1_assets/hiltonLogo.png'

//used stateless functional component
function Footer() {
  return (
    <div className='footer-space'>
        <img className='header_logoimg' src={logo} />
    </div>
 );
}

export default Footer;