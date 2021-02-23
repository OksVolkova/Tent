import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Figure from "react-bootstrap/esm/Figure";
import ComItem1 from "../../images/gazebo-roof-polycarbonate.jpg"
import ComItem2 from "../../images/gazebo-roof-polyester.jpg"
import ComItem3 from "../../images/gazebo-roof-pvc.jpg"
import ComItem4 from "../../images/gazebo-roof-pe.jpg"

import  "./ComparationSection.scss";
import "../../styles/fonts.scss";

function ComparationSection ( ) {
    return (
            <div className="border-section">
                <Container className="text-enty">
                    <h2>Roof materials in comparison</h2>
                    <p>House of Tents offers you a wide range of gazebos in different sizes, frames and roof materials. Whether polycarbonate, polyester, PE or PVC canopies - what exactly are the properties of these materials? How weatherproof is which model?</p>
                    <Row className="comparation-item-holder">
                        <Col md={6} lg={3} className="comparation-item">
                            <h3>polycarbonate</h3>
                            <Figure>
                                <Figure.Image
                                    alt="Shape-retaining and heat-resistant roof material for polycarbonate gazebos"
                                    title="Shape-retaining and heat-resistant roof material for polycarbonate gazebos"
                                    src={ComItem1}
                                />
                             </Figure>
                             <div className="description-list">
                                <h5>Advantages:</h5>
                                <ul>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Robust &amp; rigid</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>High heat resistance</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span> Protects well in case of hail</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Highly weather resistant</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>100 % waterproof</span>
                                    </li>
                                </ul>
                             </div>
                             <Container className="comparation-item-footer">
                                <h5 className="whithout-marker">Our products with polycarbonate</h5>
                                <a href="#" className="comparation-link">Garden gazebos  <span class="icon-chevron-thin-right"></span></a>
                            </Container>
                         </Col>
                         <Col md={6} lg={3} className="comparation-item">
                            <h3>Polyester</h3>
                            <Figure>
                                <Figure.Image
                                    alt="Lightweight and abrasion-resistant polyester roof material for gazebos"
                                    title="Lightweight and abrasion-resistant polyester roof material for gazebos"
                                    src={ComItem2}
                                />
                             </Figure>
                             <div className="description-list">
                                <h5>Advantages:</h5>
                                <ul>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Lightweight & inexpensive</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Dries quickly after rain</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span> Doesn't require much maintenance</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Highly abrasion resistant</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>With PVC coating 100 % waterproof</span>
                                    </li>
                                </ul>
                             </div>
                             <Container className="comparation-item-footer">
                                <h5 className="whithout-marker">Our products with poyester</h5>
                                <a href="#" className="comparation-link">Pop up gazebos <span class="icon-chevron-thin-right"></span></a>
                                <a href="#" className="comparation-link">Garden gazebos <span class="icon-chevron-thin-right"></span></a>
                             </Container>
                        </Col>
                         <Col md={6} lg={3} className="comparation-item">
                            <h3>PVC</h3>
                            <Figure>
                                <Figure.Image
                                    alt="Durable and robust PVC roof material for gazebos"
                                    title="Durable and robust PVC roof material for gazebos"
                                    src={ComItem3}
                                />
                             </Figure>
                             <div className="description-list">
                                <h5>Advantages:</h5>
                                <ul>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Durable &#x26;  strong</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Flame retardant</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Can be repaired in an emergency</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Similar to the feel of a truck tarpaulin</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>100 % waterproof</span>
                                    </li>
                                </ul>
                             </div>
                             <Container className="comparation-item-footer">
                                <h5 className="whithout-marker">Our products with PVC</h5>
                                <a href="#" className="comparation-link">Marquees<span class="icon-chevron-thin-right"></span></a>
                                <a href="#" className="comparation-link">Garden gazebos<span class="icon-chevron-thin-right"></span></a>
                             </Container>
                         </Col>
                         <Col md={6} lg={3} className="comparation-item">
                            <h3>Polyethylene (PE)</h3>
                            <Figure>
                                <Figure.Image
                                    alt="Lightweight and space-saving PE roof material for gazebos"
                                    title="Lightweight and space-saving PE roof material for gazebos"
                                    src={ComItem4}
                                />
                             </Figure>
                             <div className="description-list">
                                <h5>Advantages:</h5>
                                <ul>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Light &#x26; inexpensive</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Space-saving in transport</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Enables quick assembly and dismantling</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>Easy to handle</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-checkmark"></span>
                                        <span>100 % waterproof</span>
                                    </li>
                                </ul>
                             </div>
                             <Container className="comparation-item-footer">
                                <h5 className="whithout-marker">Our products with PE</h5>
                                <a href="#" className="comparation-link">Marquees<span class="icon-chevron-thin-right"></span></a>
                             </Container>
                         </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default ComparationSection;