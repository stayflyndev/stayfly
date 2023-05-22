import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import brook from "data/brook.json";

import LayoutDefault from "layouts/LayoutDefault";
import Header from "components/header/HeaderFive";
import PopupSearch from "components/popup/PopupSearch";
import PopupMobileMenu from "components/popup/PopupMobileMenu";
import Footer from "container/footer/FooterOne";
import HeroStartup from "container/hero-banner/HeroStartup";
import Services from "container/service/ServiceTen";
import AboutUS from "container/about-us/AboutPageArea";
import WorkingProcess from "container/work/WorkOne";
import Portfolios from "container/portfolio/homes/PortfolioSeven";
import Newsletter from "container/call-to-action/homes/CallToActionNewsletter";
import CallToAction from "container/call-to-action/homes/CallToActionFour";

const HomeStartup = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Startup || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-5 template-font-1" revealFooter={false}>
                <Header
                    transparent={true}
                />
                <PopupSearch/>
                <PopupMobileMenu/>
                <HeroStartup/>
                <Services className="bg_color--13"/>
                <WorkingProcess className="startup"/>
                <AboutUS/>
                <CallToAction className="bg_color--7"/>
                <Portfolios className="bg_color--5"/>
                <Newsletter className="bg_color--13"/>
            </LayoutDefault>
            <Footer/>
        </Fragment>
    );
};

export default HomeStartup;