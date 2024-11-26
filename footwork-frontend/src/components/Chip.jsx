import React, { useState } from "react";
import check from '../assets/icons/check-black.png'; // Import check icon

const Chip = ({
    text,
    isSelected,
    onClick
}) => {

    return (
        <div className={`chip ${isSelected ? 'selected' : ''}`}>
            <button 
                className={`${isSelected ? 'selected' : ''}`}
                onClick={() => onClick(!isSelected)}
            >
                {isSelected && (
                    <img 
                        className="icon"
                        src={check}
                        alt="Selected"
                    />
                )}
                {text}
            </button>
        </div>
    );
};

export default Chip;
