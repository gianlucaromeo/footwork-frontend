import React from "react";
import Chip from "./Chip";

const Chips = ({
    title = ""
}) => {
    return (
        <div className="chipContainer">
            <div>
                {title}
            </div>
            <div className="chips">
                {/* @Gianluca: add this from db*/}
                <Chip text= {title}/>
            </div>
        </div>
    );
};
export default Chips