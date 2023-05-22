import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SlickSlider from "components/slick";
import ImageSlider from "components/image-slider";
import PopupVideo from "components/popup-video";
import Button from "components/button";
import Breadcrumb from "components/breadcrumb/BreadcrumbTwo";
import breadcrumbBg from "assets/img/blush/port.jpg";
import portDetailsData from "data/portfolio-details";
import videoThumb from "assets/img/portfolio/big-image/portfolio-custom-layout-05-image-01.jpg";
import Header from "components/header/HeaderTwo";

const ModernPortfolioDetails = () => {


    return (
        <Fragment>
            
            <Breadcrumb
               bgImg={breadcrumbBg}
            />
            <div className="brook-portfolio-details bg_color--1 ptb--150 ptb-md--80 ptb-sm--60">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="portfolio-left bk-portfolio-details">
                                <div className="portfolio-main-info">
                                    <h3 className="heading heading-h3 line-height-1-42">About Project</h3>

                                    <div className="portfolio-details-list mt--60 mt_sm--30 justify-content-center"> 
                                        {portDetailsData.meta.map(item => (
                                            <div className="details-list" key={item.id}>
                                                <label>{item.type}</label>
                                                <span><a href={`${process.env.PUBLIC_URL + "/"}`}>{item.text}</a></span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="portfolio-content mt_sm--60 mt_md--80">
                                <h6 className="heading heading-h6">mEWIK PLAYER</h6>
                                <div className="desc mt--20">
                                    <p className="bk_pra" dangerouslySetInnerHTML={{__html: portDetailsData.desc}}/>

                                    <div className="brk-btn-wrap mt--40 mt_sm--20">
                                        <Button
                                        linkType='external'
                                            type="link"
                                            size="sd"
                                            color="theme"
                                            btnStyle="rounded"
                                            btnText="Live Preview"
                                            btnLink="https://mewzik.onrender.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    
                
                </Container>
            </div>
        </Fragment>
    );
};

export default ModernPortfolioDetails;
