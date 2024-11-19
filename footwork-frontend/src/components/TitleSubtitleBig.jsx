const TitleSubtitleBig = ({ 
    title = '', 
    subtitle = '' 
}) => {
    return (
        <div>
            <h1>{title}</h1> {/* Title */}
            <p>{subtitle}</p> {/* Subtitle */}
        </div>
    );
};

export default TitleSubtitleBig;