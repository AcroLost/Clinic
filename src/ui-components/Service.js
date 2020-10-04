import React from 'react';

export const Service = ({ children, image }) => {
    return (
        <div className="service">
            <img className="service__image"
                src={require(`../images/${image}.png`)}
                alt="service"
            />
            <div className="service__info">
                {children}
            </div>
        </div>
    );
}