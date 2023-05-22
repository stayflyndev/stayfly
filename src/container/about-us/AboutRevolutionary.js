import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const AboutRevolutionary = () => {
    return (
        <div className="brook-about-area pt--130 pt_md--80 pt_sm--60 bg-shape">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="about-content text-center max-width--990">
                            <h1 className="heading heading-h6 font-bold text-white letter-spacing-3">hello, im tori </h1>
                            <div className="bk-separator--10"/>
                            <h4 className="heading heading-h3 line-height-1-62 text-white font-40">
                                Equipped with a plethora of professional tech experience and  growing. Currently working with software engineering specializing in the MERN stack and mobile apps. Recently ventured into AR/VR, AI, and robotics. Enjoys learning and exploring tech and it's involment
                                <span className="theme-color"> in society </span> and culture.
                            </h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutRevolutionary;
