import React from "react";
import Button from "./Button";
import TrashIcon from "../assets/icons/delete-white.png"

const PopUpDeleteFolder = () => {
    return (
        <div>
            <h1>delete folder?</h1>
            <div>
                Are you sure you want to delete the whole folder?
            </div>
            <div>
                <Button text = "cancel" />
                <Button text = "delete" iconName = {TrashIcon}/>
            </div>
        </div>
    )
}
export default PopUpDeleteFolder