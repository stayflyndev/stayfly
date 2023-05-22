import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "layouts/LayoutDefault";
import Header from "components/header/HeaderFive";
import Footer from "container/footer/FooterOne";
import PortfolioDetails from "container/portfolio-details/ModernPortfolioDetails";

const PortfolioDetailsModern = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Portfolio | Jesus Loves</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <PortfolioDetails/>
              
            </LayoutDefault>
        </Fragment>
    );
};

export default PortfolioDetailsModern;