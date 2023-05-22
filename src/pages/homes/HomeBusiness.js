import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import brook from "data/brook.json";

import Footer from "container/footer/FooterTwo";
import Header from "components/header/HeaderOne";
import Blogs from "container/blog/homes/BlogOne";
import LayoutDefault from "layouts/LayoutDefault";
import FunFact from "container/funfact/FunfactOne";
import Contact from "container/contact/ContactOne";
import Services from "container/service/ServiceOne";
import Team from "container/team-member/homes/TeamOne";
import HeroSlider from "container/slider/SliderBusiness";
import Portfolios from "container/portfolio/homes/PortfolioOne";
import ClientLogo from "container/client-logo/homes/ClientLogoOne";
import Testimonial from "container/testimonial/homes/TestimonialOne";


const HomeBusiness = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Business || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-2">
                <Header/>
                <HeroSlider/>
                <Services/>
                <Portfolios/>
                <FunFact/>
                <Team/>
                <Testimonial/>
                <ClientLogo
                    arrows={false}
                    dots={false}
                    variant={'brand-style--1'}
                />
                <Blogs/>
                <Contact/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default HomeBusiness;