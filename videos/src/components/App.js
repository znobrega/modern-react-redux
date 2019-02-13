import React from 'react'
import youtube from '../api/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {

    state = { 
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onSearchSubmit('building');
    }

    onSearchSubmit = async term => {
        const response = await youtube.get('search', {
                params: {
                    q: term
                }
            })

            this.setState( {
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            } )
    }

    onVideoSelect = (video) => {
        this.setState( {selectedVideo: video} )
    }

    render() {
        return (
            <div className="ui container ">
                <SearchBar  onFormSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App