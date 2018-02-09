import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/SearchBar'

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
      </div>
    );
  }
}

export default App;
