import React, { Component } from 'react';
import Header from '../../components/partoneComponents/Header/Header'
import Main from '../../components/partoneComponents/Main/Main'
import Footer from '../../components/partoneComponents/Footer/Footer'



function Partone() {
  return (
    <div>
      <title>Hilton Mobile App</title>
      {/* broke part1 down into 3 parts as below */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Partone;