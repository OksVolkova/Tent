import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Figure from "react-bootstrap/esm/Figure";
import HeroImage from "../../images/weatherproof-gazebos.jpg"

import  "./HeroSection.scss";
import "../../styles/fonts.scss";

function HeroSection ( ) {
    return (
        <>
            <Container className="hero">
                <Row>
                    <Col xs={12} xl={9}>
                    <Figure>
                        <Figure.Image
                            alt="Weatherproof gazebos for any weather"
                            title="Weatherproof gazebos for any weather"
                            src={HeroImage}
                        />
                    </Figure>
                    </Col>
                    <Col xs={12} xl={3} className="hero-text">
                                    <div className="hero-text-holder">
                                        <p>Weatherproof &amp; stable</p>
                                        <span className="icon-sun-solid"></span>
                                    </div> 
                                    <div className="hero-text-holder">
                                        <p> Aluminium and steel frames</p>
                                        <span className="icon-cogs-solid"></span>
                                    </div> 
                                    <div className="hero-text-holder">
                                        <p>All models include a waterproof roof</p>
                                        <span className="icon-cloud-showers-heavy-solid"></span>
                                    </div> 
                                    <div className="hero-text-holder">
                                        <span></span>
                                        <p>Accessories available to increase stability</p>
                                    </div> 
                            </Col>
                </Row>
            </Container>
            <div className=" border-section">
                <Container className="text-enty">
                    <h1>Weatherproof gazebos: waterproof, stable 	&amp; UV-resistant</h1>
                    <p>Whether pop up gazebos, garden gazebos or marquees - all gazebo models from House of Tents are of very high quality. They are an effective shelter from harmful UV rays, rain, and wind. Find your favourite gazebo for a summer party, outdoor wedding, or to leave standing in your home garden all year round without hesitation!</p>
                </Container>
            </div>
        </>
    )
}

export default HeroSection;
