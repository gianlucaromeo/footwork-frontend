const ImageCard = ({ imageUrl, text }) => {
    return (
        <div>
            <img src={imageUrl} alt={text} />
            <div>{text}</div>
        </div>
    )
}

export default ImageCard