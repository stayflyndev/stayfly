import React from 'react';
import {Col, Row} from "react-bootstrap";
import services from "data/service/ServiceStartUp.json";
import PopupVideo from "components/popup-video";


const ServiceTen = ({className}) => {
    return (
        <div className={`brook-service-area ${className ? className : null}`}>
            <Row className="align-items-center">
                <Col xl={7}>
                    <Row className="startupservice-wrapper">
                        {services.map(service => (
                            <Col md={6} key={service?.id}>
                                <div className="single-motive-speech text-white">
                                    <div className="icon">
                                        <i className={service?.icon}/>
                                    </div>
                                    <div className="content">
                                        <h4>{service?.title}</h4>
                                        <p>{service?.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>

                <Col xl={5}>
                    <div className="client-succeed bg_image--24 ptb--220 ptb-md--80 ptb-lg--80 ptb_lp--130 ptb-sm--60">
                        <Row className="align-items-center plr_md--40 plr_sm--40">
                            <Col lg={4}>
                                <PopupVideo
                                    isThumb={false}
                                    channel={'youtube'}
                                    videoId={'9No-FiEInLA'}
                                    gradient={false}
                                    iconStyleClass="second-icon"
                                />
                            </Col>

                            <Col lg={8}>
                                <div className="content pr--30 pr_sm--0 text-center text-lg-start">
                                    <h3 className="heading heading-h3 font-32 text-white line-height-1-88">
                                        We help our clients succeed by delivering products that improve life, work and play.
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceTen;
