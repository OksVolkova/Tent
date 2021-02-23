import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Figure from "react-bootstrap/esm/Figure";
import TextImg1  from "../../images/gazebo-sun-protection.jpg"

import  "./MainInfoSection.scss";
import "../../styles/fonts.scss";

function MainInfoSection ( ) {
    return (
        <div className="border-section main-text-section">
             <Container >
                <h2>Which gazebo for which weather?</h2>
                <Row>
                    <Col md={6}>
                        <Figure>
                            <Figure.Image
                                alt="Alt attribute
                                Pop up gazebo with high UV protection"
                                title="Alt attribute
                                Pop up gazebo with high UV protection"
                                src={TextImg1}
                            />
                        </Figure>
                     </Col>
                    <Col md={6}>
                        <h2 className="bold letter-spacing">For protection from the sun</h2>
                        <p className="cutted">
                            All high quality gazebos at House of Tents have a high UV resistance - ideal for hot summer days. 
                            If UV protection 30+ is enough for you, then the Rendezvous and Sunset steel garden gazebos are just right.
                            If you would like increased protection against UV radiation, then we recommend either our PE marquees, 
                            our garden gazebos in the Premium and Deluxe lines, or our Economy steel and Economy aluminium pop up gazebos. 
                            All these gazebo tents offer great UV protection of SPF 50+. For the ultimate in sun protection all of our high quality PVC (Profi-line) marquees,
                            as well as the Premium steel and Professional aluminium pop up gazebos offer UV protection of SPF 80+.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default  MainInfoSection;