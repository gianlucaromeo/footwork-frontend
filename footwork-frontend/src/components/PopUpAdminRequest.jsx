import { useEffect, useState } from "react";
import Button from './Button';
import CardRequest from "./CardRequest";

import adminsService from '../services/admins';

const PopUpAdminRequest = ({ onClose }) => {
    const [unverifiedStudents, setUnverifiedStudents] = useState([]);

    useEffect(() => {
        adminsService
            .getAllStudents()
            .then((response) => {
                setUnverifiedStudents(response.data.filter(student =>
                    !student.verifiedByAdmin
                ));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="popupOverlay" onClick={onClose}>
            <div className="popupContainer userRequest" onClick={(e) => e.stopPropagation()}>
                <div className="titleButton">
                    <h2>Request(s)</h2>
                    <Button 
                        text="cancel" 
                        className="btn-text s"
                        onClick={onClose} 
                    />
                </div>
                <CardRequest students={unverifiedStudents}/>
            </div>
        </div>
    );
};

export default PopUpAdminRequest;
