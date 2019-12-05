import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import AddNew from './components/AddNew/AddNew'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      items: [],
    }
  }

  render() {
    return <AddNew />
  }
}
