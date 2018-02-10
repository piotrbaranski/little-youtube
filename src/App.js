import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const API_KEY = 'AIzaSyDo0LvUfwYc1cQu08fklNVOTnLadLp8UXo';

class App extends Component {

  state = {
    videos: []
  }

  componentDidMount() {
    YTSearch({key: API_KEY, term: 'cat'}, (videos) => {
      this.setState({videos})
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
