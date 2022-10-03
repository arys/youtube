import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from './youtube'

class App extends React.Component {
  state = { videos: [] }
  onYoutubeSearch = async (text) => {
    const response = await youtube.get('/search', {
      params: {
        q: text
      }
    })
    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onYoutubeSearch}  />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App