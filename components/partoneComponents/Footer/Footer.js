import React, { Component } from 'react';
import styles from './Footer.css';
import logo from '../../../test1_assets/hiltonLogo.png'

//used stateless functional component
//would be nice if there are more resources to add on this footer. I added a Hilton logo for now
function Footer() {
  return (
    <footer className='footer-space'>
        <img className='header_logoimg' src={logo} />
    </footer>
 );
}

export default Footer;