import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from './youtube'

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  onYoutubeSearch = async (text) => {
    const response = await youtube.get('/search', {
      params: {
        q: text
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    console.log(this.state.selectedVideo)
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onYoutubeSearch}  />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {this.state.selectedVideo && <VideoDetail video={this.state.selectedVideo} />}
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App