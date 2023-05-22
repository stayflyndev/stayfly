import React from 'react';
import {Link} from "react-router-dom";

const Button = ({type, linkType, btnText, btnLink, size, btnStyle, color, onClick, className}) => {
    return (
        type === 'link' ? (
            linkType === 'external' ? (
                <a
                    className={`brook-btn bk-btn-${color} btn-${size}-size btn-${btnStyle} space-between ${className}`}
                    href={btnLink}
                    onClick={onClick}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    {btnText}
                </a>
            ) : (
                <Link
                    className={`brook-btn bk-btn-${color} btn-${size}-size btn-${btnStyle} space-between ${className}`}
                    to={btnLink}
                    onClick={onClick}
                >
                    {btnText}
                </Link>
            )

        ) : (
            <button
                className={`brook-btn bk-btn-${color} btn-${size}-size btn-${btnStyle} space-between ${className}`}
                onClick={onClick}
            >
                {btnText}
            </button>
        )
    );
};

Button.defaultProps = {
    type: "link",
    size: "sm",
    btnStyle: "theme",
    linkType: "internal"
}

export default Button;
