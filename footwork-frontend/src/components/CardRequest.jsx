import React from "react";
import CardTitleInfo from "./CardTitleInfo";
import CardCourses from "./CardCourses";
import Button from "./Button";

const CardRequest = () => {
    return(
        <div>
            <div>
                <CardTitleInfo title='last name' data= '***Handstand' />
                <CardTitleInfo title='first name' data= '***Henri' />
            </div>
            <CardCourses showRequestButton={false}/>
            <div>
                <Button text="deny" />
                <Button text="confirm" />
            </div>
        </div>
    )
}
export default CardRequest