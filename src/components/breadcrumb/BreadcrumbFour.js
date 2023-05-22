import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import IconListItem from "components/icon-list/IconListItemTwo";
import purpGirl from '../../assets/img/blush/purpgirl.png'

const BreadcrumbFour = () => {
    return (
        <div
            className="brook-breadcrumb-area fullscreen breadcrumb-title-bar breadcrumb-title-white d-flex align-items-center pt_md--70 pt_sm--100 pb_sm--50 position-relative">
            <div className="overlay" style={{backgroundColor: "#000", opacity: 0.6}}/>
            <Container fluid={true} className="plr--180 plr_lg--100 plr_md--50 plr_sm--50 m--100 about">
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="breadcrumb-inner text-start">
                        <img src={purpGirl}/>
                        </div>
                    </Col>

                    <Col lg={6} className="mt_md--30 mt_sm--30">
                        <Row className="mt--n50">
                            {content.map(item => (
                                <Col key={item.id} xl={6} className="mt--50">
                                    <IconListItem data={item}/>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const content = [
    {
        id: 1,
        iconClass: "ion-ios-lightbulb-outline",
        title: "Front End",
        content: "HTML, CSS, Javascript, Bootstrap, MaterialUI, React, Angular"
    },
    {
        id: 2,
        iconClass: "ion-ios-color-wand-outline",
        title: "Back End",
        content: "Javascript, PHP, Python, Java, Node.js, Express, WebRTC"
    },
    {
        id: 3,
        iconClass: "ion-connection-bars"
        ,
        title: "Databases and API",
        content: "MongoDB, Firebase, MYSQL, REST, FastAPI, GraphQL"
    },
    {
        id: 4,
        iconClass: "ion-ios-cloudy-outline",
        title: "Cloud and Security",
        content: "Heroku, AWS, CloudFlare, Bcrypt, JWT, Blockchain, Web3"
    }
]

export default BreadcrumbFour;
