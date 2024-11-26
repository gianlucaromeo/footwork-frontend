import React from "react";
import Button from './Button';
import CardRequest from "./CardRequest";

const PopUpAdminRequest = ({ onClose }) => {
    const handleButtonClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div className="popupOverlay" onClick={onClose}>
            <div className="popupContainer userRequest" onClick={(e) => e.stopPropagation()}>
                <div className="titleButton">
                    <h2>Request(s)</h2>
                    <Button 
                        text="cancel" 
                        className="btn-text s"
                        onClick={onClose} 
                    />
                </div>
                <CardRequest/>
            </div>
        </div>
    );
};

export default PopUpAdminRequest;
