import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(destination => {
      const destinationName = destination.name.toLowerCase()
      const serchvalue = searchInput.toLowerCase()
      return destinationName.includes(serchvalue)
    })

    return (
      <div className="main_search_container">
        <h1>Destination Search</h1>
        <div>
          <div className="search_container">
            <input
              type="search"
              value={searchInput}
              onChange={this.onSearchInputValue}
              className="input"
            />
            <img
              className="search-Icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="search_list_container">
            {searchResults.map(destination => (
              <DestinationItem destination={destination} key={destination.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
