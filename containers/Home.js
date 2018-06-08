import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from './Home.css';




function Home() {
  return (
    <div className='home-container'>
        <Link to="/">
             <div className='route'>home</div>
        </Link>
        <Link to="/partone">
            <div className='route'>part1</div>
        </Link>
        <Link to="/parttwo">
            <div className='route'>part2</div>
        </Link>
    </div>
 );
}

export default Home;