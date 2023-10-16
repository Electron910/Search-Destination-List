import DestinationItem from './components/DestinationItem'

import {Component} from 'react'

import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    return (
      <div className="bg-container">
        <h1 className="main-heading">Destination Search</h1>
        <input type="search" />
        <div>
          <ul>
            {this.destinationsList.map(item => (
              <DestinationItem destItem={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
