import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import heroBannerBg from "assets/img/revolution/slider-home-start-ups-slide-01-bg.jpg";
import heroImage from "assets/img/revolution/slider-home-start-ups-slide-01-image-01.png";
import Button from "components/button";

const HeroStartup = () => {
    return (
        <div className="hero-banner-wrapper startup" style={{backgroundImage: `url(${heroBannerBg})`}}>
            <div className="hero-image">
                <img src={heroImage} alt="brook-startup"/>
            </div>

            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="hero-banner-content hero-banner-content--startup">
                            <h2>result-driven <br/> creative agency.</h2>
                            <p>We design & build brands, campaigns & digital projects for businesses large & small </p>

                            <div className="mt--40 mt_sm--25">
                                <Button
                                    size="sd"
                                    type="link"
                                    lineType="internal"
                                    btnStyle="bullet"
                                    btnLink="/about-one"
                                    color="theme-border"
                                    btnText="More About Us"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroStartup;
