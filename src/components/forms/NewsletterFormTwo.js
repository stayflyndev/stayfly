import React from 'react';
import Input from "components/input";
import {Row, Col} from 'react-bootstrap';

const NewsletterFromTwo = () => {
    return (
        <form>
            <Row>
                <Col xs={12}>
                    <div className="input-box mt--30">
                        <Input
                            id={'newsletter_form_2'}
                            name={'newsletter_form_2'}
                            type={'email'}
                            placeholder={'Your e-mail'}
                        />
                        <button className="fa fa-envelope"/>
                    </div>
                </Col>
            </Row>
        </form>
    );
};

export default NewsletterFromTwo;
