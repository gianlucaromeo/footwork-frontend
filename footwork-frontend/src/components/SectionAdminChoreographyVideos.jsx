import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import adminsService from '../services/admins'
import TitleWithArrow from './TitleWithArrow'
import Button from './Button'
import VideoColumn from './VideoColumn'
import iconPlus from '../assets/icons/plus.png'

const SectionAdminChoreographyVideos = ({
    onBack,
    choreographyId
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
                const choreography = response.data[0].choreography.title
                setChoreographyName(choreography)
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

    return (<div className="adminDashboard">
        <div className="headerContainer courseChoreographies">
            <TitleWithArrow
                title = "***PLACEHOLDER"
                subtitle = "Available videos in this class"
                /* ***TODO GIANLUCA PARSE BACK */
            />
            <Button 
                    text="Add video"
                    /* ***TODO onlcik opens add video page */
                    onClick={() => {}}
                    iconName={iconPlus}
                    className="btn-admin"
                />
        </div>
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
                    onVideoRowClicked={(videoId) => { }} // TODO
                    onDeleteVideo={() => {}}
                />
            </div>
    </div>
        
    )
}

export default SectionAdminChoreographyVideos