import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';
import banner from './Banner.png'
import './Home.css'

const Home = () => {
    return (

        <div>
            {/* banner design */}
            <Card className="p-3 m-5 text-black bg-white border-dark">
                <Card.Img className='banner' src={banner} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>তোমার সাথে সর্বক্ষণ আছে তোমার গাইড <i class="fas fa-chalkboard-teacher"></i></Card.Title>
                    <Card.Text>
                        ঘরে বাইরে যখন তখন যেখানে থাকো হাতের কাছে থাকছে সমস্ত নোট ও বই এই ওয়েবসাইটে । পছন্দ করো তোমার অংশ আর এগিয়ে যাও কয়েক ধাপ।
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
<HomeService></HomeService>
        </div>
    );
};

export default Home;