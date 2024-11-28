import React from "react";
import Button from "./Button";
import TrashIcon from "../assets/icons/delete-white.png"

const PopUpDelete = ({ 
    onDelete, // what should happen onDelete?
    onClose,
    title, 
    text
}) => {
    return (
        <div className="popupOverlay" onClick={onClose}>
            <div className="popupContainer" onClick={(e) => e.stopPropagation()}>
                <div className="titleSubtitle">
                    <h1>delete {title}</h1>
                    <div>{text}</div>
                </div>
                <div className="buttonsLeft">
                    <Button 
                        text="cancel" 
                        className="btn-primary m"
                        onClick={onClose}
                    />
                    <Button 
                        text="delete"
                        className="btn-text m"
                        iconName={TrashIcon}
                        onClick={onDelete}
                    />
                </div>
            </div>
        </div>
    );    
};
export default PopUpDelete