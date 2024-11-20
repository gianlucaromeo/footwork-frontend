/* DO NOT USE! */

import React from 'react';

const BtnAdmin = ({ onClick = () => {}, iconName, children }) => {
    return (
        <button className="btn-admin" onClick={onClick}>
            {/* Render icon first, then the text */}
            {iconName && (
                <div className="icon">
                    <img src={iconName} alt="icon" />
                </div>
                )
            }
            {children} {/* This will render the button text */}
        </button>
    );
};

export default BtnAdmin;
