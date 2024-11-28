import React, { useState } from 'react'
import Button from './Button'

const PopUpDiscard = (
    onDiscard, //go back to page from before
    onClose, // hide popup
) => {

return (
    <div className="popupOverlay" onClick={onClose}>
            <div className="popupContainer" onClick={(e) => e.stopPropagation()}>
                <div className="titleSubtitle">
                    <h1>discard changes?</h1>
                    <div>Are you sure you want to discard all changes?</div>
                </div>
                <div className="buttonsLeft">
                            <Button 
                                text="cancel" 
                                className="btn-primary m"
                                onClick={onClose}
                            />
                            <Button 
                                text="discard"
                                className="btn-text m"
                                onClick={onDiscard}
                            />
                </div>
            </div>
    </div>
)
}
export default PopUpDiscard