import React from 'react';
import checkIcon from '../assets/icons/check-green.png';
import warningIcon from '../assets/icons/warning.png';

const InputField = ({
    label = "",
    type = "text",
    state = "", /* state of InputField can be default, valid or error */
    value = "",
    onChange = () => { },
    errorMessage = "",
}) => {
    const icon = state === "valid" ? checkIcon : state === "error" ? warningIcon : null;

    return (
        <div className="inputContainer">
            <label className="name">{label}</label>
            <input className={state} type={type}
                    value={value}
                    onChange={onChange}
                />
                {icon && (
                <img
                    src={icon}
                    alt={state === "valid" ? "Valid Icon" : "Error Icon"}
                    className="icon"
                />
                )}
                {
                    errorMessage != '' ? <div className="error">{errorMessage}</div> : <div></div>
            }
        </div>
    )
}

export default InputField