import React from "react";
import './Page.css';
import {Container} from "react-bootstrap";
import { useEffect } from "react";

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

export const LetsFight = () => (
    <Container fluid>
        <ScrollToTopOnMount/>
        <div className="container">
            <h1>#LETSUNITETOFIGHT</h1>
            <div className="nopage">
                <div className="face">
                    <div className="eyes">
                        <span className="eye"></span>
                        <span className="eye"></span>
                    </div>
                </div>
                <div className="face">
                    <div className="eyes">
                        <span className="eye"></span>
                        <span className="eye"></span>
                    </div>
                </div>
            </div>
        </div>
    </Container>
);