import { useState, useEffect, useRef } from 'react'
import React from 'react';
import deleteIcon from '../assets/icons/delete-white.png'; 
import playGreenIcon from '../assets/icons/play-green.png';

const VideoRow = ({
    videoNumber,        // TODO Video number (e.g., "1")
    coverImageUrl,           // Thumbnail image source
    videoUrl,                // Video source
    title = "",              // Title of the video
    iconAlt = "Delete Icon", // Alt text for the icon
    onClick,                 // Callback for row click
    onDelete,                // Callback for delete icon click
}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null); // Reference to the video element

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); // Define mobile as <= 768px
        };

        checkScreenSize(); // Initial check
        window.addEventListener("resize", checkScreenSize); // Listen for resize events

        return () => {
            window.removeEventListener("resize", checkScreenSize); // Cleanup listener
        };
    }, []);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Play the video
            setIsPlaying(true); // Update state
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
    };
    const handlePause = () => {
        setIsPlaying(false);
    };

    if (isMobile) {
        return (
            <div className="videoContainer">
                <div className="Video">
                <div onClick={handlePlayClick}>
                    <div className="videoTile">
                        <video
                            ref={videoRef} // Attach ref to the video element
                            src={videoUrl}
                            controls
                            poster={coverImageUrl}
                            className="videoBackground"
                            onPlay={handlePlay} // Trigger when video starts
                            onPause={handlePause} // Trigger when video pauses
                        ></video>
                        {!isPlaying && (
                            <img
                                src={playGreenIcon}
                                alt="Play Icon"
                                className="playIcon"
                                onClick={handlePlayClick} // Play video when icon is clicked
                            />
                        )}
                    </div>
                </div>
                </div>
                <div className="nrAndTitle">
                    <div className="Nr">
                        <div className="center copy-regular-med">{videoNumber}</div>
                    </div>
                    <div className="title">
                        <div className="copy-regular-med">{title}</div>
                    </div>
                    {onDelete && 
                            <div onClick={(e) => {
                                e.stopPropagation(); // Prevent row's onClick from triggering
                                onDelete(videoNumber); // Call delete handler
                            }}>
                                <img 
                                    src={deleteIcon} 
                                    alt={iconAlt} 
                                    style={{ width: "24px", height: "24px" }}
                                />
                            </div>
                    }
                </div>
            </div>
        )
    }

    return (
    <div className={`videoContainer ${videoNumber % 2 === 0 ? 'evenBg' : 'unevenBg'}`}>
            <div className="Nr">
                <div className="center copy-large-med">{videoNumber}</div>
            </div>
            <div className="Video">
                <div onClick={handlePlayClick}>
                    <div className="videoTile">
                        <video
                            ref={videoRef} // Attach ref to the video element
                            src={videoUrl}
                            controls
                            poster={coverImageUrl}
                            className="videoBackground"
                            onPlay={handlePlay} // Trigger when video starts
                            onPause={handlePause} // Trigger when video pauses
                        ></video>
                        {!isPlaying && (
                            <img
                                src={playGreenIcon}
                                alt="Play Icon"
                                className="playIcon"
                                onClick={handlePlayClick} // Play video when icon is clicked
                            />
                        )}
                    </div>
                </div>
            </div>
            <div>
                <div className="copy-large-med videoTitle">{title}</div>
            </div>
            <div className="deleteIconContainer">
                {onDelete && 
                    <div onClick={(e) => {
                        e.stopPropagation(); // Prevent row's onClick from triggering
                        onDelete(videoNumber); // Call delete handler
                    }}>
                        <img 
                            src={deleteIcon} 
                            alt={iconAlt} 
                            style={{ width: "32px", height: "32px" }}
                        />
                    </div>
                }
             </div>
    </div>
    );
};

export default VideoRow;
