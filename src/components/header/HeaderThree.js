import React from 'react';
import Logo from "./elements/logo";
import Navbar from "./elements/navbar/Navbar";
import HeaderContainer from "container/header/HeaderContainerOne";
import HeaderConfig from "components/header/elements/config/HeaderConfigOne";

import logo from 'assets/img/logo/brook-white.png'

const HeaderThree = () => {
    return (
        <HeaderContainer
            logoVersion={'light'}
            transparent={true}
            sticky={true}
        >
            <div className="header-left flex-20">
              <h2 style={{color:"white"}}>Stay fly & dev</h2>
            </div>

            <div className="header-flex-right flex-80">
                <Navbar/>
                <HeaderConfig/>
            </div>
        </HeaderContainer>
    );
};

export default HeaderThree;