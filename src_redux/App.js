import React, { Component } from 'react'
import './toDoApp.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import AddNew from './components/AddNew/AddNew'
import Counter from './components/Counter/Counter'
import List from './components/List/List'
import { connect } from 'react-redux'

class toDoApp extends Component {
  handleDelete = index => {
    this.props.deleteItem(index)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.submitItem(event)
  }

  handleChange = event => {
    this.props.changeValue(event.target.value)
  }

  render() {
    const { length: tasksCount } = this.props.items

    return (
      <main className="container">
        <h4>
          To do: <Counter value={tasksCount} />
        </h4>

        <div className="row row-cols-1 toDoApp">
          <AddNew
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onDelete={this.handleDelete}
            entryName={this.props.entryName}
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
              <List items={this.props.items} onDelete={this.handleDelete} />
            </tbody>
          </table>
        ) : (
          <h3>No tasks</h3>
        )}
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    entryName: state.entryName,
    items: state.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeValue: entryName => {
      dispatch({ type: 'CHANGE_VALUE', entryName: entryName })
    },
    deleteItem: id => {
      dispatch({ type: 'DELETE_VALUE', id: id })
    },
    submitItem: event => {
      dispatch({ type: 'SUBMIT_VALUE', event: event })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(toDoApp)
