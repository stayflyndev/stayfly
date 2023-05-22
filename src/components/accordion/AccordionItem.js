import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const AccordionItem = ({title, eventKey, content}) => {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                {content}
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default AccordionItem;
