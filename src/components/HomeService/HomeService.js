import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import jsc from './jsc.png'
import ssc from './ssc.jpg'
import hsc from './hsc.jpg'
import admission from './admission.jpg'
import './HomeService.css'

const HomeService = () => {
    return (
        <div>
            <h1 className='batch'>Running Batch for you...</h1>
            {/* services design */}
            <CardGroup>
                <Card>
                    <Card.Img className='batch-img' variant="top" src={jsc} />
                    <Card.Body>
                        <Card.Title>JSC Batch</Card.Title>
                        <Card.Text>
                            ঘরে বাইরে যখন তখন যেখানে থাকো হাতের কাছে থাকছে সমস্ত নোট ও বই এই ওয়েবসাইটে । পছন্দ করো তোমার অংশ আর এগিয়ে যাও কয়েক ধাপ।
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className='price'>Only at <strike>300</strike> 200 BDT</small>
                        <Button variant='outline-primary'>See more</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img className='batch-img' variant="top" src={ssc} />
                    <Card.Body>
                        <Card.Title>SSC Batch</Card.Title>
                        <Card.Text>
                            ঘরে বাইরে যখন তখন যেখানে থাকো হাতের কাছে থাকছে সমস্ত নোট ও বই এই ওয়েবসাইটে । পছন্দ করো তোমার অংশ আর এগিয়ে যাও কয়েক ধাপ।
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className='price'>Only at <strike>500</strike> 300 BDT</small>
                        <Button variant='outline-primary'>See more</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img className='batch-img' variant="top" src={hsc} />
                    <Card.Body>
                        <Card.Title>HSC Batch</Card.Title>
                        <Card.Text>
                            ঘরে বাইরে যখন তখন যেখানে থাকো হাতের কাছে থাকছে সমস্ত নোট ও বই এই ওয়েবসাইটে । পছন্দ করো তোমার অংশ আর এগিয়ে যাও কয়েক ধাপ।
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className='price'>Only at <strike>800</strike> 500 BDT</small>
                        <Button variant='outline-primary'>See more</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img className='batch-img' variant="top" src={admission} />
                    <Card.Body>
                        <Card.Title>Admission Batch</Card.Title>
                        <Card.Text>
                            ঘরে বাইরে যখন তখন যেখানে থাকো হাতের কাছে থাকছে সমস্ত নোট ও বই এই ওয়েবসাইটে । পছন্দ করো তোমার অংশ আর এগিয়ে যাও কয়েক ধাপ।
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer>
                        <small className='price'>Only at <strike>1000</strike> 800 BDT</small>
                        <Button variant='outline-primary'>See more</Button>
                    </Card.Footer>
                </Card>

            </CardGroup>
        </div>
    );
};

export default HomeService;