import React, { useState } from "react";
import check from '../assets/icons/check-green.png'; // Import check icon

const Chip = ({
    text = "" // Text displayed on the chip
}) => {
    const [isSelected, setIsSelected] = useState(false); // State to track selection

    // Toggle selection
    const handleChipClick = () => {
        setIsSelected((prev) => !prev);
    };

    return (
        <div>
            <button
                onClick={handleChipClick}
            >
                {isSelected && (
                    <img
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
