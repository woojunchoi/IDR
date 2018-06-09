import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from './Home.css';




function Home() {
  return (
    <div className='home-container'>
        {/* Link to part 1 */}
        <Link to="/partone">
            <div className='route'>part1</div>
        </Link>
        {/* Link to part 2 */}
        <Link to="/parttwo">
            <div className='route'>part2</div>
        </Link>
    </div>
 );
}

export default Home;