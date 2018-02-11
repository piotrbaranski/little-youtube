import React, {Component} from 'react';
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

import './App.css'

const API_KEY = 'AIzaSyDo0LvUfwYc1cQu08fklNVOTnLadLp8UXo';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.videoSearch('cats')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <div className='flex-container'>
          <div className='flex-item'>
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className='flex-item'>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
