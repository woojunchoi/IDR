import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'



function Partone() {
  return (
    <div>
        <title>Hilton Mobile App</title>
        {/* broke app down into 3 parts as below */}
        <Header />
        <Main />
        <Footer />    
    </div>
 );
}

export default Partone;