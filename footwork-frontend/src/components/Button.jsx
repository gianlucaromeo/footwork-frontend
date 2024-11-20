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
            <button className={style} onClick={onClick} disabled={disabled}>
                {iconName && (
                    <div className="icon">
                        <img src={iconName} alt="icon" />
                    </div>
                    )
                }
                {text}
            </button>
    );
};

export default Button
