/* DO NOT USE! */

const BtnPrimaryMDisabled = ({
    onClick = () => { },
    children
}) => {
    return (
        <div>
            <button disabled onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default BtnPrimaryMDisabled