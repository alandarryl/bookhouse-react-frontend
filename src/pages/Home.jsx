// src/pages/Home.js
import { useState, useEffect } from 'react';
import axios from 'axios'; 

import Hero from '../components/section/Hero';

const Home = () => {

    return (
        <div>
        <Hero/>
            <h1>
                This is the homepage
            </h1>
        </div>
    );
};

export default Home;