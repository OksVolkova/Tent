import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from "react-bootstrap/esm/ListGroup";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Button  from "react-bootstrap/esm/Button";
import Navbar  from "react-bootstrap/esm/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";

import  "./Header.scss";
import "../../styles/fonts.scss";

function Header ( ) {
    return (
        <>
            <div className="pre-header">
                <Container className="pre-header-inner d-none d-md-flex">
                    <Row>
                        <ListGroup className="flex-column flex-md-row">
                            <ListGroup.Item  className="d-flex justify-content-center justify-content-md-start"><span><span className="icon icon-checkmark"></span>10 years guaranteed spare parts availibility</span></ListGroup.Item>
                            <ListGroup.Item  className="d-flex justify-content-center justify-content-md-start"><span><span className="icon icon-checkmark"></span>Professional quality</span> </ListGroup.Item>
                            <ListGroup.Item  className="d-flex justify-content-center justify-content-md-start"><span className="tel"><span className="icon icon-checkmark"></span>Expert advice: <a href="tel:01183150873">01183150873</a><phone></phone></span> </ListGroup.Item>
                        </ListGroup>
                    </Row>
                </Container>
            </div>
            <header className="header">
                <Container  className="header-inner">
                        <Row className="holder justify-content-md-between bottom-margin align-items-center">
                            <Col xs={9} lg={4}>
                                < Form className="search-form">
                                    <Form.Group controlId="search" >
                                        <Form.Control type="email" placeholder="Search" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        <span class="icon-search"></span>
                                    </Button>
                                </Form>
                            </Col>
                            <Col xs={3} lg={1} className="basket">
                                <a href="https://google.com">
                                    <div  className="basket-price d-none d-md-block">
                                        <span>Basket</span>
                                        <br></br>
                                        <span className="price d-flex">€ 0.<small>00</small></span>
                                    </div>
                                    <div className="shopping-cart">
                                        <span class="icon-shopping-cart-solid"></span>
                                        <span className="q-ty d-none">0</span>
                                    </div>
                                </a>
                             </Col>
                        </Row>
                        <Row className="nav-holder justify-content-center justify-content-md-start">
                            <Col sm={12} className="position-unset" >
                            <Navbar bg="primary" expand="md" variant="dark">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="#Marquees">Marquees</Nav.Link>
                                    <Nav.Link href="#Garden Gazebos">Garden Gazebos</Nav.Link>
                                    <Nav.Link href="#Pop Up Gazebos">Pop Up Gazebos</Nav.Link>
                                    <Nav.Link href="#Portable Garage">Portable Garage</Nav.Link>
                                    <Nav.Link href="#Storages Tents">Storages Tents</Nav.Link>
                                    <Nav.Link href="#Industrial Tents">Industrial Tents</Nav.Link>
                                    <Nav.Link href="#Arched Shelters">Arched Shelters</Nav.Link>
                                    <Nav.Link href="#Accessories">Accessories</Nav.Link>
                                    <NavDropdown title="More" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            </Col>
                        </Row>
                </Container>
            </header>
        </>
     )
}
export default Header;