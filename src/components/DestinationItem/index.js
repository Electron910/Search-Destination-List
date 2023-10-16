// Write your code here
import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destItem} = this.props
    const {name, imgUrl} = destItem
    return (
      <li className="container">
        <img src={imgUrl} className="image" />
        <p className="para">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
