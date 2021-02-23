
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import ImgCustomServ from '../../images/weatherproof-gazebo-collage.jpg';
import Figure from "react-bootstrap/esm/Figure";

import  "./CustomServiceSection.scss";
import "../../styles/fonts.scss";

function CustomServiceSection ( ) {
    return (
        <Container className="custom-service-section">
            <h2>House of Tents - we <span class="icon icon-heart-o"></span>tents</h2>
            <Figure>
                    <Figure.Image
                        alt="weatherproof-gazebo-collage"
                        title="weatherproof-gazebo-collage"
                        src={ImgCustomServ}
                    />
            </Figure>
            <div className="info-text">
                <h2> <span class="icon icon-bullhorn"></span>Our expert customer service - always there for you!</h2>
                <p>Do you have any questions about our showerproof gazebos? Are you looking for a grey folding tent, for example, that will stay firmly on the ground even in a storm? Or would you simply like some personal advice? Feel free to call our expert customer service, we will be happy to advise you and give you all the answers to your questions!</p>
            </div>
        </Container>
     )
}
export default CustomServiceSection;