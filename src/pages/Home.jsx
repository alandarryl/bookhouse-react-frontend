// src/pages/Home.js
import { useState, useEffect } from 'react';
import axios from 'axios'; 

import Hero from '../components/section/Hero';
import BestOffers from '../components/section/BestOffers';
import PopularBooks from '../components/section/PopularBooks';
import RecentBooks from '../components/section/RecentBooks';
import Testimonials from '../components/section/Testimonials';

const Home = () => {

    return (
        <div>
            <Hero/>
            <BestOffers/>
            <PopularBooks/>
            <Testimonials/>
        </div>
    );
};

export default Home;