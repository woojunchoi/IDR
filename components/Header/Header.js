import React from 'react';
import styles from './Header.css';
import logo from '../../test1_assets/hiltonLogo.png'
import sample from '../../test1-mobile-page.png'


//used stateless functional component
function Header(props) {
    return (
        <div>
            <header className='header'>
                <a className='btn-back' href='/'><span>Back</span></a>
                <h5 className='header_maintext'>Hotel Details</h5>
                <img className='header_logoimg' src={logo} />
            </header>
            {/* left exmaple image to compare my work with example */}
            {/* <img src={sample} /> */}
        </div>
    );
}

export default Header;