import React from 'react';
import './Footer.css'
import minute from './10minutesschool.jpg';
import pathshala from './onnorokom.jpg';
import ghuri from './ghuri.png'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <h3 className='batch'>Affliction Partner <i className="far fa-handshake"></i></h3>
                <div>
                    <img src={minute} alt='' />
                    <img src={pathshala} alt='' />
                    <img src={ghuri} alt='' />
                </div>
                <p>Copyright © 2021 silswa.com</p>
            </div>
        </div>
    );
};

export default Footer;