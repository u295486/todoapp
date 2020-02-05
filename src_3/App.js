import React, { Component } from 'react'
import './toDoApp.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import AddNew from './components/AddNew/AddNew'
import Counter from './components/Counter/Counter'
import List from './components/List/List'

export default class toDoApp extends Component {
  state = {
    entryName: '',
    items: [],
  }

  handleDelete = index => {
    const filteredItems = [...this.state.items]
    filteredItems.splice(index, 1)

    this.setState({
      items: filteredItems,
    })
  }

  handleSubmit = event => {
    const { entryName, items } = this.state
    event.preventDefault()
    if (entryName !== '') {
      this.setState({
        entryName: '',
        items: entryName ? [...items, entryName] : items,
      })
    }
  }

  handleChange = event => {
    this.setState({ entryName: event.target.value })
  }

  render() {
    const { length: tasksCount } = this.state.items

    return (
      <main className="container">
        <h4>
          To do: <Counter value={tasksCount} />
        </h4>

        <div className="row row-cols-1 toDoApp">
          <AddNew
            items={this.state.items}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onDelete={this.handleDelete}
            entryName={this.state.entryName}
          />
        </div>

        {tasksCount > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Task name:</th>
              </tr>
            </thead>

            <tbody>
              <List items={this.state.items} onDelete={this.handleDelete} />
            </tbody>
          </table>
        ) : (
          <h3>No tasks</h3>
        )}
      </main>
    )
  }
}
