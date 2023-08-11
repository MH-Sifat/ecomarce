import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='main-div'>
           <div className='details-div'>
            <span>Sale up to 70% off</span>
            <h2>New Collection For Fall</h2>
            <p>Discover all the new arrivals of ready-to-wear collection.</p>
           <Link to='/order'><button className='shopnow'>SHOP NOW</button></Link> 
           </div>
           <div className='image-conatiner'>
            <div className='image-div'>
                <img src='src/assets/images/home-main.png'/>
            </div>
            <div className='background'></div>
           </div>
        </div>
    );
};

export default Home;