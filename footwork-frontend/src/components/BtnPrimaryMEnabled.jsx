const BtnPrimaryMEnabled = ({
    onClick = () => { },
    children,
    disabled = false // Accept the disabled prop
}) => {
    return (
        <div>
            <button onClick={onClick} disabled={disabled}>
                {children}
            </button>
        </div>
    );
};

export default BtnPrimaryMEnabled;
