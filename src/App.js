import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'

const API_KEY = 'AIzaSyDo0LvUfwYc1cQu08fklNVOTnLadLp8UXo';

class App extends Component {

  state = {
    videos: []
  }

  componentDidMount() {
    YTSearch({key: API_KEY, term: 'cat'}, (videos) => {
      this.setState({videos})
      console.log(videos)
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
