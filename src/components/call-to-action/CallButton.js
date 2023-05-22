import React from 'react';

const CallToActionButton = ({btnLink,children,className}) => {
    return (
        <div className="call-btn text-center text-lg-end mt-4 mt-lg-0">
            <a className={`brook-btn ${className && className}`}
               href={process.env.PUBLIC_URL + btnLink}>
                {children}
            </a>
        </div>
    );
};

export default CallToActionButton;