import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import thought from "../../assets/img/blush/thought.png";
const HeroRevolutionary = () => {
  return (
    <div className="revolution-slider-area slider-bg-1 slider-bg-2 slideBg">
      <div className="revolution-slider slider-bg-2">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="inner pt--100 pb--170 text-center">
                <img src={thought} />
                <div className="bk-separator--15" />
                <h1 className="heading heading-h1 text-white font-120 shadow">
                  a love <br /> & passion <br />
                  <h3>for tech</h3>
                </h1>
               
                <div className="slider-btn"></div>
              </div>
              <div className="text-center">
                <div className="basic-modern-dots white-dots">
                  <div className="dot first-circle" />
                  <div className="dot second-circle" />
                  <div className="dot third-circle" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeroRevolutionary;
