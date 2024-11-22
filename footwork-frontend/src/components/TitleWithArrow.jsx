import React from "react";
import arrow from "../assets/icons/arrow-left.png";

const TitleWithArrow = ({
    title = "",
    subtitle = "",
}) => {
    return (
        <div className="titleSubtitle">
            <button className="arrowTitle">
                <div className="arrow"></div>
                <h2>
                    {title}
                </h2>
            </button>
            <div>
                {subtitle}
            </div>
        </div>
    );
};

export default TitleWithArrow;
