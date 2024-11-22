import VideoRow from './VideoRow';

const VideoColumn = ({ courseName, videos, onVideoRowClicked, onDeleteVideo }) => {

  return (
    <div>
      <h3>{courseName}</h3>
      {videos.map((video) => (
        <VideoRow
          key={video.id}
          videoNumber={video.id}
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
