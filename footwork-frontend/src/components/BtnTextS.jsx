/* DO NOT USE! */

const BtnTextS = ({ 
    onClick = () => {}, 
    iconName, 
    children 
}) => {
    return (
        <button onClick={onClick}>
            {/* Render icon first, then the text */}
            {iconName && <img src={iconName} alt="icon" />}
            {children} {/* This will render the button text */}
        </button>
    );
};

export default BtnTextS;
