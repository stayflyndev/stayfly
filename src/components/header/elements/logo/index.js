import React from 'react';
import {Link} from "react-router-dom";

const Logo = ({logo}) => {
    return (
        <div className="logo">
            <Link to={process.env.PUBLIC_URL + "/"}>
                STAY FLY & DEV
            </Link>
        </div>
    );
};

export default Logo;