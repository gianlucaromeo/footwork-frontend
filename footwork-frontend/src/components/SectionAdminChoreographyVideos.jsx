import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import adminsService from '../services/admins'
import TitleWithArrow from './TitleWithArrow'
import Button from './Button'
import VideoColumn from './VideoColumn'
import iconPlus from '../assets/icons/plus.png'
import videosService from '../services/videos'

import choreographiesService from '../services/choreographies'

const SectionAdminChoreographyVideos = ({
    onBack,
    choreographyId,
    onAddVideoClick
}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    const [videos, setVideos] = useState([])
    const [choreographyName, setChoreographyName] = useState('')

    useEffect(() => {
        adminsService.getAllVideos()
            .then((response) => {
                const videos = response.data.filter(
                    video => video.choreography.id === choreographyId
                )
                setVideos(videos)
            }).catch((error) => {
                console.log(error)
            })

            const checkScreenSize = () => {
                setIsMobile(window.innerWidth <= 768);
            };
    
            checkScreenSize(); // Initial check
            window.addEventListener("resize", checkScreenSize); // Listen for resize events
    
            return () => {
                window.removeEventListener("resize", checkScreenSize); // Cleanup listener
            };
    }, [])

    const navigate = useNavigate();

    useEffect(() => {
        const handlePopState = (event) => {
            onBack();
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [navigate]);

    useEffect(() => {
        choreographiesService.getAll()
            .then((response) => {
                const choreography = response.data.find(choreography => 
                    choreography.id === choreographyId
                )
                setChoreographyName(choreography.title)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (<div className="adminDashboard">
        <div className="headerContainer courseChoreographies availableVideos">
            <TitleWithArrow
                title = {choreographyName}
                subtitle = "Available videos in this class"
                onClick = {onBack}
            />
            <Button 
                    text="Add video"
                    onClick={onAddVideoClick}
                    iconName={iconPlus}
                    className="btn-admin"
                />
        </div>
        <div className="centerTable">
            <div className="tableContainer">
                    {/* Only render headerRow if not mobile */}
                    {!isMobile && (
                        <div className="headerRow">
                            <div className="Nr">
                                <h4 className="center">Nr</h4>
                            </div>
                            <h4 className="Video">Video</h4>
                            <h4 className="title">Title</h4>
                            <h4>Delete</h4>
                        </div>
                    )}
                    <VideoColumn
                        videos={videos}
                        onVideoRowClicked={(videoId) => { }}
                        onDeleteVideo={(id) => {
                            videosService.deleteVideo(id)
                                .then(() => {
                                    const newVideos = videos.filter(
                                        video => video.id !== id
                                    )
                                    setVideos(newVideos)
                                }).catch((error) => {
                                    console.log(error)
                                })
                        }}
                    />
                </div>
            </div>
    </div>
        
    )
}

export default SectionAdminChoreographyVideos