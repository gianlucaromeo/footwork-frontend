const Tile = ({ imageUrl, text }) => {
    return (
        <div className="tile" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="tileText">{text}</div>
        </div>
    )
}

export default Tile