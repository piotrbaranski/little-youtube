import React, {Component} from 'react'

import './SearchBar.css'

class SearchBar extends Component {

  state = {
    term: ''
  }

  handleInputChange = event => this.setState({term: event.target.value});

  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={this.handleInputChange}/>
      </div>
    )
  }
}

export default SearchBar;