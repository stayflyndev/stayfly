import React, {useState,Fragment} from 'react';
import VisibilitySensor from "react-visibility-sensor";

import LayoutDefault from "layouts/LayoutDefault";
import Header from "components/header/HeaderFive";
import HeroBanner from '../../container/hero-banner/HeroRevolutionary'
import About from "container/about-us/AboutRevolutionary";


import Footer from "container/footer/FooterSix";

const HomeRevolutionary = () => {

    const [bgColor, setBgColor] = useState('#cd4631');

    return (
        <LayoutDefault className="template-color-6 template-font-1">
            <div className="home-revolutionary" style={{backgroundColor: bgColor, transition:'2s'}}>
                <Header/>

                <VisibilitySensor partialVisibility={true} onChange={(isVisible) => {
                    isVisible && setBgColor('#7a8450');
                }}>
                    <HeroBanner/>
                </VisibilitySensor>

                <VisibilitySensor partialVisibility={true} onChange={(isVisible) => {
                    isVisible && setBgColor('#ff9f1c');
                }}>
                    <About/>
                </VisibilitySensor>

           

                <VisibilitySensor partialVisibility={true} onChange={(isVisible) => {
                    isVisible && setBgColor('#cd4631');
                }}>
                    <Fragment>
                       
                        <Footer/>
                    </Fragment>
                </VisibilitySensor>
            </div>
        </LayoutDefault>
    );
};

export default HomeRevolutionary;