import React from 'react'

const VideoDetail = ({ video }) => {
    if(!video){
        console.log('loading')
        return <div>Loading... </div>
    }
    console.log('passou do loading')
    return (
        <div>
            <div className="ui embed">
                <iframe title="video layer" src={`https://youtube.com/embed/${video.id.videoId}`} />
            </div>
            <div className="ui segment">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail