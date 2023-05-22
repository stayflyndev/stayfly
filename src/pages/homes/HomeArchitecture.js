import {Helmet} from "react-helmet";
import brook from "data/brook.json";
import React, {Fragment} from 'react';

import Footer from "container/footer/FooterOne";
import Blog from "container/blog/homes/BlogFour";
import LayoutDefault from "layouts/LayoutDefault";
import Header from "components/header/HeaderFour";
import Services from "container/service/ServiceFive";
import ContactArea from "container/contact/ContactTwo";
import About from "container/about-us/AboutArchitecture";
import SliderArchitecture from "container/slider/SliderArchitecture";
import Testimonial from "container/testimonial/homes/TestimonialFour";
import LatestProject from '../../container/portfolio/homes/PortfolioFour'
import CallToAction from "container/call-to-action/homes/CallToActionThree";

const HomeArchitecture = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Architecture || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-4 template-font-1 bg_color--1" revealFooter={true}>
                <Header/>
                <SliderArchitecture/>
                <About/>
                <Services/>
                <LatestProject/>
                <Testimonial/>
                <Blog/>
                <CallToAction bgColor={'#FCB72B'}/>
                <ContactArea/>
            </LayoutDefault>
            <Footer className="fixed-footer bg_color--11"/>
        </Fragment>
    );
};

export default HomeArchitecture;