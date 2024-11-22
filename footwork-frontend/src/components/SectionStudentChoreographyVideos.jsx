import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import studentsService from '../services/students'
import VideoColumn from './VideoColumn'

const SectionStudentChoreographyVideos = ({
    onBack
}) => {
    const [videos, setVideos] = useState([])
    const [choreographyName, setChoreographyName] = useState('')

    useEffect(() => {
        studentsService.getAllVideos()
            .then((response) => {
                setVideos(response.data)
                const choreography = response.data[0].choreography.title
                setChoreographyName(choreography)
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
        <div>
            <VideoColumn
                courseName={choreographyName}
                videos={videos}
                onVideoRowClicked={(videoId) => { }} // TODO
            />
        </div>
    )
}

export default SectionStudentChoreographyVideos