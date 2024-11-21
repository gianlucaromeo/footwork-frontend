import React from 'react';
import deleteIcon from '../assets/icons/delete-black.png';
import CheckboxContainer from './CheckboxContainer';

const StudentsRows = ({
    lastname = "",       // Last name of student
    firstname = "",      // First name of student
    onClick,             // Row click handler
    onDelete             // Delete handler
}) => {
    return (
        <button
            onClick={onClick} // Handle row click
        >
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
                    e.stopPropagation(); // Prevent row's onClick from triggering
                    onDelete(); // Call delete handler
                }}
            >
                <img
                    src={deleteIcon}
                    alt="Delete"
                />
            </div>
        </button>
    );
};

export default StudentsRows;
