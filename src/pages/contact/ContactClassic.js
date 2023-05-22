import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "layouts/LayoutDefault";
import Header from "components/header/HeaderFive";
import Breadcrumb from "components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "assets/img/blush/sitting.png";
import ContactInfo from "container/contact/ContactFour";
import ContactForm from "container/contact/ContactFive";
import Footer from "container/footer/FooterOne";
import sitting from "../../assets/img/blush/thought.png"
const ContactClassic = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Contact | Jesus Loves You</title>
            </Helmet>

            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <Breadcrumb
                    title="Contact"
                    bg={sitting}
                />
                <ContactInfo/>
                <ContactForm/>
             
            </LayoutDefault>
        </Fragment>
    );
};

export default ContactClassic;