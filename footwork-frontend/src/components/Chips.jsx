import React from "react";
import Chip from "./Chip";

const Chips = ({
    title = ""
}) => {
    return (
        <div>
            <div>
                {title}
            </div>
            {/* @Gianluca: add this from db*/}
            <Chip title= {title}/>
        </div>
    );
};
export default Chips