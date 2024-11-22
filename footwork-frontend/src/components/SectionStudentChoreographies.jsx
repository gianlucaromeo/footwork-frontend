import { useState, useEffect } from 'react'
import studentsService from '../services/students'
import VideoColumn from './VideoColumn'

const SectionStudentChoreographies = () => {
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