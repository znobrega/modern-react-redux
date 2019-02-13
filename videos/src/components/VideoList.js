import React from 'react'

import VideoItem from './VideoItem'

//props can be the objects
const VideoList = props => {   
    const videos = props.videos.map(video => {
        console.log(video.snippet.title)
        return (
            <VideoItem  
                key={video.id.videoId} 
                video={video}
                onVideoSelect={props.onVideoSelect}
            />

        )
    })     

    return <div className="video-list ui relaxed divided list">{videos}</div>
}

export default VideoList