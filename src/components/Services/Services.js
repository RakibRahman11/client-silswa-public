import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        // fake data load
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {/* map for every components */}
            {
                services.map(service => <Service service={service}></Service>)
            }
        </div>
    );
};

export default Services;