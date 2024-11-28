import VideoRow from './VideoRow';

const VideoColumn = ({ videos, onVideoRowClicked, onDeleteVideo }) => {

  return (
    <div className="videoRows">
      {videos.map((video, index) => (
        <VideoRow
          key={video.id}
          videoId={video.id}
          videoNumber={index+1}
          thumbnail={video.coverImageUrl}
          videoUrl={video.videoUrl}
          title={video.title}
          onClick={() => onVideoRowClicked(video.id)} 
          onDelete={onDeleteVideo && (() => onDeleteVideo(video.id))}
        />
      ))}
    </div>
  );
};

export default VideoColumn;
