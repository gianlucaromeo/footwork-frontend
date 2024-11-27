import React from "react";
import CardTitleInfo from "./CardTitleInfo";
import Button from "./Button";
import CoursesOptions from './CoursesOptions';


const CardRequest = ({students}) => {
    return(
        <div className="card request">
            <div className="informationContainer">
                {students.map((student) => 
                    <>
                        <div className="column">
                            <CardTitleInfo 
                                title='last name' 
                                data={student.firstName}
                            />
                            <CardTitleInfo 
                                title='first name' 
                                data={student.lastName}
                            />
                        </div>
                        <div className="coursesContainer">
                            <h5>Courses</h5>
                            <CoursesOptions
                                /*  ***TODO !!!!!!!!!!!!!!!!!!!!!!!!!!! */
                                onSelectedCoursesChanged={ () => {}}
                            />
                        </div>
                    </>
                )}
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