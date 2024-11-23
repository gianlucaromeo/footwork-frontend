import React from "react";
import arrow from "../assets/icons/arrow-left.png";

const TitleWithArrow = ({
    title = "",
    subtitle = "",
    onClick
}) => {
    return (
        <div className="titleSubtitle">
            <button className="arrowTitle" onClick = {onClick}>
                <div className="arrow"></div>
                <h2>
                    {title}
                </h2>
            </button>
            <div className="subtitle">
                {subtitle}
            </div>
        </div>
    );
};

export default TitleWithArrow;
