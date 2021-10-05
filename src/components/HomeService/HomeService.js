import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeService.css'

const HomeService = (props) => {
    const { title, description, enroll, price, img } = props.homeservice;
    return (
            <div className='card-details'>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>Total students enrolled: {enroll}</Card.Text>
                        <Card.Text>Price: {price}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default HomeService;