import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import studentsService from '../services/students'
import VideoColumn from './VideoColumn'

const SectionStudentChoreographies = ({ onBack }) => {
    /*
        video: {
            id: number,
            choreographyId: number,
            coverImageUrl: string,
            title: string,
            videoUrl: string,
        }
    */
    const [videos, setVideos] = useState([])

    useEffect(() => {
        studentsService.getAllVideos()
            .then((response) => {
                setVideos(response.data)
                console.log(response.data)
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
                videos={videos}
                onVideoRowClicked={(videoId) => {}} // TODO
            />
        </div>
    )
}

export default SectionStudentChoreographies