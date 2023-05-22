import React from 'react';
import {Col, Row} from "react-bootstrap";
import listContent from "data/list";
import ListItem from "components/list";

const CallToActionFour = ({className}) => {
    return (
        <div className={`brook-strategy-area startup ${className}`}>
            <Row>
                <Col lg={6}>
                    <div
                        className="bk-strategy-content max-width--600 ms-auto pt--120 pb--120 pr--160 pr_lg--30 pl_lg--30 pr_md--50 pl_md--50 pr_sm--30 pl_sm--30">
                        <h3 className="heading heading-h3 line-height-1-42 yellow-color-2 wow move-up text-white">
                            Brand strategy and digital creation.
                        </h3>
                        <div className="bk-separator--30"/>
                        <p className="bk_pra font-16 line-height-1-87 pr--30 wow move-up text-white">
                            Our quality of service assessment involves controlling and managing resources to ensure
                            customers' satisfaction.
                        </p>
                        <div className="bk-separator--40"/>

                        <div className="bk-list--2">
                            {listContent.map(item => (
                                <ListItem
                                    key={item.id}
                                    marker={'check check-yellow-color-2'}
                                    text={item.text}
                                />
                            ))}
                        </div>
                    </div>
                </Col>

                <Col lg={6}>
                    <div className="bk-stratagy-thumb bg_image--25 ptb--180 h-100"/>
                </Col>
            </Row>
        </div>
    );
};

export default CallToActionFour;
