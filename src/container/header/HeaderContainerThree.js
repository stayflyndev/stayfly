import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {isSticky} from '../../utils/isSticky';

const HeaderContainerThree = ({children, classes, transparent}) => {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);
        }
    });

    return (
        <header className={`br_header header-left--align header-default clearfix header-architecture header-transparent light-logo--version header-fixed-width header-fixed-150 is-sticky header-mega-menu ${classes}`}>
            <Container fluid={true}>
                <Row>
                    <Col xs={12}>
                        <div className="header__wrapper me-0">
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default HeaderContainerThree;