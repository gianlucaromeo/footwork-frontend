import React from "react";
import TitleSubtitleBig from './TitleSubtitleBig';
import Button from './Button';

const PopUpUserRequest = () => {

    return (
        <div>
            <TitleSubtitleBig title="Request sent" subtitle="Your request is under review by a teacher"/>
            <div>
                You will get notified via email once your status has been updated.
                This will take between 1 to 3 days.
            </div>
            <Button text="okay" />
        </div>
    );
};
export default PopUpUserRequest