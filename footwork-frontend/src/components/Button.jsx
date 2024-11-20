const Button = ({
    onClick,
    className,
    iconName, 
    text,
    disabled = false
}) => {
    let style = className
    style += disabled ? ' disabled' : ' enabled'

    return (
        <div>
            <button className={style} onClick={onClick} disabled={disabled}>
                {iconName && <img src={iconName} alt="icon" />}
                {text}
            </button>
        </div>
    );
};

export default Button
