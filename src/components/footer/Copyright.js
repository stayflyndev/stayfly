import React from 'react';

const Copyright = ({className}) => {
    return (
        <p className={className ? className : ''}>
            © {new Date().getFullYear()} StayFly&Dev <i className="fa fa-heart text-danger"/> 2023 
        </p>
    );
};

export default Copyright;
