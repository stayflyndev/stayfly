import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NewsletterForm from "components/forms/NewsletterFormTwo";

const CallToActionNewsletter = ({className}) => {
    return (
        <div className={`brook-call-to-action startup ${className} ptb--70 bg-as-text2`}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="call-content text-center text-md-start text-center">
                            <h4 className="heading heading-h4 text-white">Sign up for new updates from us.</h4>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="mt_sm--30 mt_md--40 contact-form contact-form--4 yellow-color-2">
                            <NewsletterForm/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

CallToActionNewsletter.defaultPtops = {
    className: "bg_color--13"
}

export default CallToActionNewsletter;
