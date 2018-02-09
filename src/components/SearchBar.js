import React, {Component} from 'react'


class SearchBar extends Component {

  state = {
    term: ''
  }

  handleInputChange = event => this.setState({term: event.target.value});

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.handleInputChange}/>
      </div>
    )
  }
}

export default SearchBar;