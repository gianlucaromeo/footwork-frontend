import React from "react";
import Button from './Button';
import CardRequest from "./CardRequest";

const PopUpAdminRequest = () => {
    const handleButtonClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div>
            <h1>Request(s)</h1>
            <Button 
                text="cancel" 
                onClick={handleButtonClick} 
            />
            <CardRequest/>
        </div>
    );
};

export default PopUpAdminRequest;
