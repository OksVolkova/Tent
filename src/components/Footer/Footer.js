import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button  from "react-bootstrap/esm/Button";
import  "./Footer.scss";
import "../../styles/fonts.scss";

function Footer ( ) {
    return (
        <>
            <Container className="pre-footer">
                <h3 className="bold">We look forward to your call</h3>
                <a href="tel:+44 01473 37 82 00" class="tel">+44 01473 37 82 00</a>
                <span>Mon - Fr 8am - 5pm</span>
            </Container>
            <footer  className="footer">
                <Container  className="footer-inner">
                    <span className="bold">Expert advice by telephone<a class="expert-tel" href="tel:01183150873">01183150873</a></span>
                    <Button className="footer-btn btn-light"><a href="tel:01183150873"><span className="icon icon-phone"></span>Call an expert</a></Button>
                </Container>
            </footer>
        </>
     )
}
export default Footer;