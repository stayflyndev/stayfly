import React from 'react';
import Logo from "./elements/logo";
import Navbar from "./elements/navbar/Navbar";
import HeaderContainer from "container/header/HeaderContainerOne";
import HeaderConfig from "components/header/elements/config/HeaderConfigOne";

import logoWhite from 'assets/img/logo/brook-white.png'

const HeaderTwo = () => {
    return (
        <HeaderContainer
            logoVersion={'light'}
            transparent={true}
            sticky={true}
            classes="position-from--top"
        >
            <div className="header-left">
            <h2 style={{color:"black"}}>stay fly & dev</h2>

            </div>

            <Navbar/>

            <div className="header-right flex-20">
                <HeaderConfig/>
            </div>
        </HeaderContainer>
    );
};

export default HeaderTwo;