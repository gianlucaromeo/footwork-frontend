import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import studentsService from '../services/students'
import coursesService from '../services/courses'
import VideoColumn from './VideoColumn'

const SectionStudentChoreographyVideos = ({ courseId, onBack }) => {
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
    const [courseName, setCourseName] = useState(null)

    useEffect(() => {
        coursesService.getAll()
            .then((response) => {
                const course = response.data.find((course) => 
                    course.id === courseId
                )
                setCourseName(course.name)
            }).catch((error) => {
                console.log(error)
            })

        studentsService.getAllVideos()
            .then((response) => {
                setVideos(response.data)
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
                courseName={courseName}
                videos={videos}
                onVideoRowClicked={(videoId) => {}} // TODO
            />
        </div>
    )
}

export default SectionStudentChoreographyVideos