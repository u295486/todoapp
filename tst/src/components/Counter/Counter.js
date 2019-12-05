import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: this.props.value,
  }

  render() {
    return <div className={this.getCounterClasses()}>{this.formatCount()}</div>
  }

  getCounterClasses = () => {
    let classes = 'p-2 badge badge-'
    classes += this.props.value >= 3 ? 'warning' : 'primary'
    return classes
  }

  formatCount = () => {
    return this.props.value === 0 ? 'Zero' : this.props.value
  }
}

export default Counter
