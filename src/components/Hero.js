import React from 'react';
import './Hero.scss';

import BuyerComments from './BuyerComments';
import Star from './Star';

import perfil__1 from '../assets/perfil__1.jpg';
import perfil__2 from '../assets/perfil__2.jpg';
import perfil__3 from '../assets/perfil__3.jpg';

import {
    Container,
    Col,
    Row
} from 'react-bootstrap';

const Hero = () => {
    return (
        <Container className='text-center text-lg-start hero__container d-flex flex-column justify-content-center align-items-center'>
            <Row>
                <Col xs={12} lg={5}>
                    <div className='hero__title'>
                        <h1>10,000+ of our</h1>
                        <h1>users love our</h1>
                        <h1>products.</h1>
                    </div>
                    <div className='hero__subtitle'>
                        <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
                    </div>
                </Col>
                <Col xs={12} lg={7}>
                    <Row>
                        <Col>
                            <div className='hero__start-container '>
                                <Star text='Rated 5 Stars in Reviews' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='hero__start-container-two'>
                                <Star text='Rated 5 Stars in Report Guru' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='hero__start-container-three'>
                                <Star text='Rated 5 Stars in BestTech' />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col xs={12} lg={4}>
                    <div className='buer__container'>
                        <BuyerComments perfil={perfil__1} nome='Caltn Smith' text='"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"' />
                    </div>
                </Col>
                <Col xs={12} lg={4}>
                    <div className='buer__container-two'>
                        <BuyerComments perfil={perfil__2} nome='Irene Roberts' text='"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."' />
                    </div>
                </Col>
                <Col xs={12} lg={4}>
                    <div className='buer__container-three'>
                        <BuyerComments perfil={perfil__3} nome='Anne Wallace' text='"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"' />
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default Hero;