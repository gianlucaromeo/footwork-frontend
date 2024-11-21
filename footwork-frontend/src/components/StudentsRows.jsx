import React from 'react';
import deleteIcon from '../assets/icons/delete-black.png';
import CheckboxContainer from './CheckboxContainer';

const StudentsRows = ({
    lastname = "",       // Last name of student
    firstname = "",      // First name of student
    onDelete             // Delete handler for the icon
}) => {
    return (
        <div>
            <div>
                {lastname}
            </div>
            <div>
                {firstname}
            </div>
            <div>
                <CheckboxContainer />
                <CheckboxContainer />
                <CheckboxContainer />
            </div>
            <div
                onClick={(e) => {
                    e.stopPropagation(); // Prevent propagation in case it's wrapped in a clickable parent
                    onDelete(); // Call delete handler
                }}
            >
                <img
                    src={deleteIcon}
                    alt="Delete"
                />
            </div>
        </div>
    );
};

export default StudentsRows;
