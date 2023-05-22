import WOW from "wowjs";
import React, {useEffect} from 'react';
import ScrollToTop from "./utils/scrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PortfolioDetailsModern from "./pages/portfolios/PortfolioDetailsModern";

import Error from "./pages/others/Error";
import Career from "./pages/others/Career";
import ComingSoon from "./pages/others/ComingSoon";
import Maintenance from "./pages/others/Maintenance";


import ContactClassic from "./pages/contact/ContactClassic";

import AboutPageFour from "./pages/about/AboutPageFour";
import AboutPageThree from "./pages/about/AboutPageThree";
import AboutPageTwo from "./pages/about/AboutPageTwo";
import AboutPageOne from "./pages/about/AboutPageOne";
import ElementList from "./pages/elements/ElementList";
import ElementTypedText from "./pages/elements/ElementTypedText";
import ElementButton from "./pages/elements/ElementButton";
import ElementAccordion from "./pages/elements/ElementAccordion";
import ElementMessageBox from "./pages/elements/ElementMessageBox";
import ElementPopupVideo from "./pages/elements/ElementPopupVideo";
import ElementGallery from "./pages/elements/ElementGallery";
import ElementLightweightSlider from "./pages/elements/ElementLightweightSlider";
import ElementGradation from "./pages/elements/ElementGradation";
import ElementSocialIcons from "./pages/elements/ElementSocialIcons";
import ElementMaps from "./pages/elements/ElementMaps";
import ElementForms from "./pages/elements/ElementForms";
import ElementTabs from "./pages/elements/ElementTabs";
import ElementTestimonial from "./pages/elements/ElementTestimonial";
import ElementIconBox from "./pages/elements/ElementIconBox";
import ElementProgressbar from "./pages/elements/ElementProgressbar";
import ElementCounter from "./pages/elements/ElementCounter";
import ElementCountdownClock from "./pages/elements/ElementCountdownClock";
import ElementCallToAction from "./pages/elements/ElementCallToAction";
import ElementPricingTable from "./pages/elements/ElementPricingTable";
import ElementTeamMember from "./pages/elements/ElementTeamMember";
import ElementCarouselSlider from "./pages/elements/ElementCarouselSlider";
import ElementFlexibleImageSlider from "./pages/elements/ElementFlexibleImageSlider";
import ElementClientLogo from "./pages/elements/ElementClientLogo";

import HomeRevolutionary from "./pages/homes/HomeRevolutionary";

const App = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, []);
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-details-modern'}`}
                        element={<PortfolioDetailsModern/>}
                    />
                     <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-details-modern'}`}
                        element={<PortfolioDetailsModern/>}
                    />
                   
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio'}`}
                        element={<PortfolioDetailsModern/>}
                    />
                   
                   
                    <Route
                        path={`${process.env.PUBLIC_URL + '/coming-soon'}`}
                        element={<ComingSoon/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/maintenance'}`}
                        element={<Maintenance/>}
                    />
                 
                
                    <Route
                        path={`${process.env.PUBLIC_URL + '/contact'}`}
                        element={<ContactClassic/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/about-four'}`}
                        element={<AboutPageFour/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/about-three'}`}
                        element={<AboutPageThree/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/about-two'}`}
                        element={<AboutPageTwo/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/about-one'}`}
                        element={<AboutPageOne/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/list"}`}
                        element={<ElementList/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/typed-text"}`}
                        element={<ElementTypedText/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/button"}`}
                        element={<ElementButton/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/accordion"}`}
                        element={<ElementAccordion/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/message-box"}`}
                        element={<ElementMessageBox/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/popup-video"}`}
                        element={<ElementPopupVideo/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/gallery"}`}
                        element={<ElementGallery/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/lightweight-slider"}`}
                        element={<ElementLightweightSlider/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/gradation"}`}
                        element={<ElementGradation/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/social-icon"}`}
                        element={<ElementSocialIcons/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/map"}`}
                        element={<ElementMaps/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/form"}`}
                        element={<ElementForms/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/tab"}`}
                        element={<ElementTabs/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/testimonial"}`}
                        element={<ElementTestimonial/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/icon-box"}`}
                        element={<ElementIconBox/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/progressbar"}`}
                        element={<ElementProgressbar/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/counter"}`}
                        element={<ElementCounter/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/countdown-clock"}`}
                        element={<ElementCountdownClock/>}
                    />
                   
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/call-to-action"}`}
                        element={<ElementCallToAction/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/pricing-table"}`}
                        element={<ElementPricingTable/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/team-member"}`}
                        element={<ElementTeamMember/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/carousel-slider"}`}
                        element={<ElementCarouselSlider/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/flexible-image-slider"}`}
                        element={<ElementFlexibleImageSlider/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/client-logo"}`}
                        element={<ElementClientLogo/>}
                    />
                   
                    <Route
                        path={`${process.env.PUBLIC_URL + '/'}`}
                        element={<HomeRevolutionary/>}
                    />
                    
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </ScrollToTop>
        </Router>
    );
};

export default App;