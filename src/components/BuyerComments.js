import React from 'react';
import './BuyerComments.scss';

import {
    Row,
    Col
} from 'react-bootstrap';

const BuyerComments = ({ perfil, nome, text }) => {
    return (
        <div className='buyer__container'>
            <Row>
                <Col xs={3}>
                    <img className='buyer__perfil' src={perfil} alt='foto de perfil' />
                </Col>
                <Col xs={9}>
                    <p className='buyer__name'>{nome}</p>
                    <p className='buyer__verifid'>Verified Buyer</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='buyer__text'>
                        {text}
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default BuyerComments;