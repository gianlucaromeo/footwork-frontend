const InputField = ({
    label = "",
    type = "text",
    value = "",
    onChange = () => { },
    errorMessage = "",
}) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type}
                value={value}
                onChange={onChange}
            />
            {
                errorMessage != '' ? <div>{errorMessage}</div> : <div></div>
            }
        </div>
    )
}

export default InputField