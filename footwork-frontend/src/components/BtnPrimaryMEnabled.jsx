/* DO NOT USE! */

const Button = ({
    onClick = () => { },
    children,
    disabled = false, // Accept the disabled prop
    className
}) => {
    return (
        <div>
            <button className={className} onClick={onClick} disabled={disabled}>
                {children}
            </button>
        </div>
    );
};

export default Button;

<Button className=".btn-primary .m .disabled" children="hello" disabled={true} onClick={() => {}}/>
