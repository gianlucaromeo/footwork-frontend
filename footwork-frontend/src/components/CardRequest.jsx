import React from "react";
import CardTitleInfo from "./CardTitleInfo";
import Button from "./Button";
import RegistrationCoursesOptions from './RegistrationCoursesOptions';


const CardRequest = () => {
    return(
        <div className="card">
            <div className="informationContainer">
                <div className="column">
                    <CardTitleInfo title='last name' data= '***Handstand' />
                    <CardTitleInfo title='first name' data= '***Henri' />
                </div>
                <div className="coursesContainer">
                    <h5>Courses</h5>
                    <RegistrationCoursesOptions
                        /*  TODO !!!!!!!!!!!!!!!!!!!!!!!!!!! */
                        onSelectedCoursesChanged={ () => {}}
                    />
                </div>
            </div>
            <div className="buttonContainer">
                <Button 
                    className="btn-text s"
                    text="Deny"
                />
                <Button 
                    className="btn-primary s"
                    text="Confirm"
                />
            </div>
        </div>
    )
}
export default CardRequest