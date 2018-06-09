import React, { Component } from 'react';
import styles from './Main.css';
import Dropdown from '../Dropdown/Dropdown'
import background from '../../test1_assets/background.png'
import hotelImage from '../../test1_assets/hotelexterior.jpg'


function Main() {
    return (
        // container div with background
        <div style={{
            backgroundImage: `url(${background})`
        }} className='main-background'>

            <div className='img-container'>
                {/* hotel image goes here */}
                <img src={hotelImage} />
                <div className='hotel-info'>
                    {/* Used inline styling for easy color change */}
                    <h5 style={{ color: 'white' }}>Hilton Chicago</h5>
                    <h6 style={{ color: '#8aa5c1' }}>720 South Michigan Avenue</h6>
                    <h6 style={{ color: '#8aa5c1' }}>Chicago, Illinois, 60605</h6>
                    <h6 style={{ color: 'white', textDecoration: 'underline' }}>1-312-922-4400</h6>
                </div>
            </div>
            {/* Dropdown component goes here */}
            <Dropdown />
        </div>
    );
}

export default Main