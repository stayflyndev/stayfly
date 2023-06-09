import React from 'react';

const CallToActionContent = ({children, textColor}) => {
    return (
        <div className="call-content text-center text-lg-start">
            <h3 className="heading heading-h3" style={{color: textColor}}>{children}</h3>
        </div>
    );
};

export default CallToActionContent;