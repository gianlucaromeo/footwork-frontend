import React from "react";
import arrow from "../assets/icons/arrow-left.png";

const TitleWithArrow = ({
    title = "",
    subtitle = "",
}) => {
    return (
        <div>
            <button>
                {/* Icon in front of the title */}
                <img src={arrow} alt="Arrow Icon"/>
                <h1>
                    {title}
                </h1>
            </button>
            <div>
                {subtitle}
            </div>
        </div>
    );
};

export default TitleWithArrow;
