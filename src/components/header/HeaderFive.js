import React from 'react';
import Logo from "./elements/logo";
import Navbar from "./elements/navbar/Navbar";
import HeaderContainer from "container/header/HeaderContainerOne";
import HeaderConfig from "components/header/elements/config/HeaderConfigOne";

import logo from 'assets/img/logo/brook-black.png'

const HeaderFive = ({classes, transparent}) => {
    return (
        <HeaderContainer
            sticky={true}
            logoVersion={'black'}
            transparent={transparent}
            classes={classes}
        >
            <div className="header-left flex-20">
                <Logo logo={logo}/>
            </div>

            <div className="header-flex-right flex-80">
                <Navbar/>
                <HeaderConfig/>
            </div>
        </HeaderContainer>
    );
};

HeaderFive.defaultProps = {
    classes: "header-fixed-150",
    transparent: false
}

export default HeaderFive;