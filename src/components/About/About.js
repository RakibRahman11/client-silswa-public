import React from 'react';
import './About.css'
import about from './about.jpg'

const About = () => {
    return (
        <div className='about'>
            <h1>Secondary and Intermediate Level Students'​ Welfare Association-SILSWA.</h1>
            <p>An educational consultant that provides high-quality educational support to the students of Bangladesh. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nulla pariatur fuga a dolorem neque nobis, repudiandae explicabo porro, iste nemo recusandae quaerat magnam suscipit dolorum voluptatibus architecto veritatis cupiditate quis et impedit, minima ab. Velit odio ducimus itaque rem. Harum blanditiis suscipit beatae similique sint cum temporibus nesciunt explicabo.</p>
            <img src={about} alt=''/>
        </div>
    );
};

export default About;