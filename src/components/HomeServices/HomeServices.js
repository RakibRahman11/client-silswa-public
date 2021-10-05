import React from 'react';
import { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';
import './HomeServices.css'

const HomeServices = () => {
    const [homeservices, setHomeservices] = useState([])
    useEffect(() => {
        // fake data load
        fetch('/data.json')
            .then(response => response.json())
            // only showed 4 data from json file
            .then(data => setHomeservices(data.slice(6)))
    }, [])
    return (
        <div>
            <div><h1 className='batch'>Running Batch for you...</h1></div>
            {
                homeservices.map(homeservice => <HomeService homeservice={homeservice}></HomeService>)
            }
        </div>
    );
};

export default HomeServices;