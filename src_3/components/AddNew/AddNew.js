import React, { Component } from 'react'
import Submit from '../Submit/Submit'

class AddNew extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <label htmlFor="item">new item:</label>
          <input
            placeholder="task"
            type="text"
            id="item"
            className="form-control"
            value={this.props.entryName}
            onChange={this.props.onChange}
          />
        </div>
        <Submit />
      </form>
    )
  }
}

export default AddNew
