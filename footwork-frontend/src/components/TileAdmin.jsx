const TileAdmin = ({ 
    imageUrl, 
    text,
    onClick,
    onEditFolderClick
}) => {
    const handleButtonClick = () => {
        console.log("Button clicked!");
        onEditFolderClick();
    };

    return (
        <div 
            className="tile admin" 
            style={{ backgroundImage: `url(${imageUrl})` }}
            onClick={ onClick }
            >
            <div className="iconBtnContainer">
                <button className="iconBtn more" onClick={(e) => {
                    e.stopPropagation();
                    // ***TODO ADD LOGIC TO LINK TO SectionAdminEditCourse.jsx
                    handleButtonClick();
                }}></button> 
            </div>
            <div className="tileText">
                {text}
            </div>
        </div>
    );
};

export default TileAdmin;
