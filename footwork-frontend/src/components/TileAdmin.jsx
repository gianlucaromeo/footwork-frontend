const TileAdmin = ({ 
    imageUrl, 
    text 
}) => {
    const handleButtonClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div className="tile" style={{ backgroundImage: `url(${imageUrl})` }}>
            <button className="iconBtn more" onClick={handleButtonClick}></button> 
            <div className="tileText">
                {text}
            </div>
        </div>
    );
};

export default TileAdmin;
