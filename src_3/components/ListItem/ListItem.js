import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <tr
        key={this.props.index}
        onClick={() => this.props.deleteItem(this.props.index)}
      >
        <td>{this.props.item}</td>
      </tr>
    )
  }
}

export default ListItem
