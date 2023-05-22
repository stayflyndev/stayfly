import React from 'react';
import navbarData from "data/navbar"
import Anchor from "components/anchor"

const NavbarItem = () => {
    return (
        navbarData.map(navbar => (
            <li key={navbar.id}
                className={`label-1 ${navbar.megaMenu || navbar.subMenu ? 'with--drop' : ''} ${navbar.megaMenu ? 'slide--megamenu' : ''} ${navbar.subMenu ? 'slide-dropdown' : ''}`}>
                <Anchor path={`${process.env.PUBLIC_URL + navbar.link}`}><span>{navbar.title}</span></Anchor>
                {navbar.subMenu ? (
                    <ul className="dropdown__menu">
                        {navbar.subMenu.lists.map(subItem => (
                            <li key={subItem.id}>
                                <Anchor path={`${process.env.PUBLIC_URL + subItem.link}`}>
                                    <span>{subItem.title}</span>
                                </Anchor>
                            </li>
                        ))}
                    </ul>
                ):null}
                {navbar.megaMenu ? (
                    <div className="mega__width--fullscreen">
                        <div className="container">
                            <div className="row">
                                {navbar.megaMenu.map(megaItem => (
                                    <div key={megaItem.id} className="col-lg-3">
                                        <ul className="mega__list">
                                            <li className="mega--title">{megaItem.megaTitle}</li>

                                            {megaItem.lists.map(list => (
                                                <li key={list.id}>
                                                    <Anchor path={`${process.env.PUBLIC_URL + list.link}`}>
                                                        <span>{list.title}</span>
                                                    </Anchor>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : null}
            </li>
        ))
    );
};

export default NavbarItem;