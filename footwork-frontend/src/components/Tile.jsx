const Tile = ({ imageUrl, text, onClick }) => {
    return (
        <div className="tile" style={{ backgroundImage: `url(${imageUrl})` }} onClick={ onClick }>
          <div className="tileText">{text}</div>
        </div>
    )
}

export default Tile