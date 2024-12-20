import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import studentsService from '../services/students'
import VideoColumn from './VideoColumn'
import TitleWithArrow from './TitleWithArrow'

import choreographiesService from '../services/choreographies'

const SectionStudentChoreographyVideos = ({
    onBack,
    choreographyId
}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [videos, setVideos] = useState([])
    const [choreographyName, setChoreographyName] = useState('')

    useEffect(() => {
        studentsService.getAllVideos()
            .then((response) => {
                const videos = response.data.filter(video => video.choreography.id === choreographyId)
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

    useEffect(() => {
        choreographiesService.getAll()
            .then((response) => {
                console.log(response.data)
                const choreography = response.data.find(choreography => 
                    choreography.id === choreographyId
                )
                setChoreographyName(choreography.title)
            }).catch((error) => {
                console.log(error)
            })
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

    return (
        <div className="studentDashboard">
            <div className="headerContainer videos">
                <TitleWithArrow
                    title = {choreographyName}
                    subtitle = "Available dances in this class"
                    onClick = {onBack}
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
                            <h4>Title</h4>
                        </div>
                    )}
                    <VideoColumn
                        videos={videos}
                        onVideoRowClicked={(videoId) => { }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SectionStudentChoreographyVideos