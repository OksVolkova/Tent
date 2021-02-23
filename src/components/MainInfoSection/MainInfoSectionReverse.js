import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Figure from "react-bootstrap/esm/Figure";
import TextImg2  from "../../images/gazebo-rain-protection.jpg"

import  "./MainInfoSection.scss";
import "../../styles/fonts.scss";

function MainInfoSectionReserse ( ) {
    return (
        <div className="border-section main-text-section">
             <Container >
                <Row className="flex-row-reverse ">
                    <Col md={6}>
                        <Figure>
                            <Figure.Image
                                alt="Garden gazebo with waterproof hardtop roof"
                                title="Garden gazebo with waterproof hardtop roof"
                                src={TextImg2}
                            />
                        </Figure>
                     </Col>
                    <Col md={6}>
                        <h2 className="bold">For protection from the rain and snow</h2>
                        <p className="cutted">
                        All gazebos at House of Tents are 100% waterproof. But especially in winter, a season with a lot of wind and heavy rain, the gazebo frame makes all the difference. For example, heavy duty gazebos are more weatherproof than wooden frames. Wooden gazebos are also waterproof, but over time, the wood can rot and splinter. Steel gazebos on the other hand, are very weather-resistant while aluminium gazebos provide the best protection from rust.
For garden gazebos that will be standing in one place over winter, we advise choosing a model with a hardtop, as the heavy duty polycarbonate panels can stand up to the worst weather conditions. Depending on the model, they can even withstand snow loads of 50 to 80 kg/m2.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default  MainInfoSectionReserse;