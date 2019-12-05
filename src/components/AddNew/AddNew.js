import React, { Component } from 'react'
import Submit from '../Submit/Submit'
import List from '../List/List'
import Counter from '../Counter/Counter'

class AddNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      items: [],
    }
  }

  onChange = event => {
    this.setState({ term: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({
      term: '',
      items: this.state.term
        ? [...this.state.items, this.state.term]
        : this.state.items,
    })
  }

  deleteItem = index => {
    const filteredItems = this.state.items.filter((item, itemIndex) => {
      return itemIndex !== index
    })

    this.setState({
      items: filteredItems,
    })
  }

  render() {
    const { length: tasksCount } = this.state.items

    return (
      <main className="container ">
        <h4>
          To do: <Counter value={tasksCount} />{' '}
        </h4>

        <div className="row row-cols-1">
          <form className="App" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="item">new item:</label>
              <input
                placeholder="task"
                type="text"
                id="item"
                className="form-control"
                value={this.state.term}
                onChange={this.onChange}
              />
            </div>
            <Submit />
          </form>
        </div>
        {tasksCount > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Task name:</th>
              </tr>
            </thead>

            <List items={this.state.items} deleteItem={this.deleteItem} />
          </table>
        ) : (
          <h3>No tasks</h3>
        )}
      </main>
    )
  }
}

export default AddNew
