import React, { Component } from 'react'

class Counter extends Component {
  render() {
    const { value } = this.props
    const classes = `p-2 badge badge-${value >= 3 ? 'warning' : 'primary'}`

    return <div className={classes}>{value === 0 ? 'Zero' : value}</div>
  }
}

export default Counter
