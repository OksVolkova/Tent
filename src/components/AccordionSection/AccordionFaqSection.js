import React , {useContext} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import Accordion from 'react-bootstrap/esm/Accordion';
import AccordionContext from 'react-bootstrap/esm/AccordionContext';
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/esm/Col';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import  "./AccordionSection.scss";
import "../../styles/fonts.scss";


function ContextAwareToggle({  eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
    const text1 = "Waterproof marquees";
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
    const isCurrentEventKey = currentEventKey === eventKey;  
    return (
      <div
        className={ isCurrentEventKey ? "show" : "closed"}
        onClick={decoratedOnClick}
      >
            <span>{text1}</span>
            <span class=" icon icon-sort-desc"></span>
    </div>
    );
  }

function AccordionFaqSection ( ) {
    return (
            <div className="border-section">
                <Container className="accordion-section-holder">
                     <h4 className="bold">FAQ: Frequently asked quiestions</h4>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                 <ContextAwareToggle  eventKey="0"></ContextAwareToggle>  
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Row>
                                        <Col  className="col-12">
                                            <p>Celebrate great parties in the garden regardless of the weather - great quality outdoor canopies allow you to throw parties with less stress. Celebrate birthdays, weddings or host events in your garden. All marquees from House of Tents are 100% waterproof and if you choose a PVC garden tent, you will also be able to enjoy shelter deep into the autumn. To ensure that your product also stands up to strong winds, you will find accessories to increase its stability in our shop. Equip your marquee with a base frame, for example. Thanks to the groundbar frame, the legs of your marquee cannot slip in strong winds, giving it more support. Ground anchors for your patio or garden are also advisable.</p>
                                            <br></br>
                                            <p><b>Tip</b>: A storm has been announced or even snow? Read our magazine article on how to secure your garden tent against rain, snow and wind. This magazine article also presents and compares the various accessories - weights or anchors for soft and hard grounds including concrete, as well as tie down kits.</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                 <ContextAwareToggle  eventKey="1"></ContextAwareToggle>  
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                <Row>
                                    <Col  className="col-12">
                                        <p>Celebrate great parties in the garden regardless of the weather - great quality outdoor canopies allow you to throw parties with less stress. Celebrate birthdays, weddings or host events in your garden. All marquees from House of Tents are 100% waterproof and if you choose a PVC garden tent, you will also be able to enjoy shelter deep into the autumn. To ensure that your product also stands up to strong winds, you will find accessories to increase its stability in our shop. Equip your marquee with a base frame, for example. Thanks to the groundbar frame, the legs of your marquee cannot slip in strong winds, giving it more support. Ground anchors for your patio or garden are also advisable.</p>
                                        <br></br>
                                        <p><b>Tip</b>: A storm has been announced or even snow? Read our magazine article on how to secure your garden tent against rain, snow and wind. This magazine article also presents and compares the various accessories - weights or anchors for soft and hard grounds including concrete, as well as tie down kits.</p>
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                 <ContextAwareToggle  eventKey="2"></ContextAwareToggle>  
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                <Row>
                                    <Col  className="col-12">
                                        <p>Celebrate great parties in the garden regardless of the weather - great quality outdoor canopies allow you to throw parties with less stress. Celebrate birthdays, weddings or host events in your garden. All marquees from House of Tents are 100% waterproof and if you choose a PVC garden tent, you will also be able to enjoy shelter deep into the autumn. To ensure that your product also stands up to strong winds, you will find accessories to increase its stability in our shop. Equip your marquee with a base frame, for example. Thanks to the groundbar frame, the legs of your marquee cannot slip in strong winds, giving it more support. Ground anchors for your patio or garden are also advisable.</p>
                                        <br></br>
                                        <p><b>Tip</b>: A storm has been announced or even snow? Read our magazine article on how to secure your garden tent against rain, snow and wind. This magazine article also presents and compares the various accessories - weights or anchors for soft and hard grounds including concrete, as well as tie down kits.</p>
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
            </div>
    )
}
export default AccordionFaqSection;