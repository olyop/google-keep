import React, { Component, Fragment } from 'react'

import { API_NOTES as url, AXIOS_CONFIG as config } from '../globals'
import { componentClassNames } from '../helpers'
import { addKey, updateNotes } from './helpers'
import { concat, find } from 'lodash'
import initState from './initState'
import axios from 'axios'

import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import Content from './Content'

import './index.css'

const bem = componentClassNames('App')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initState
    this.toggleHamburger = this.toggleHamburger.bind(this)
    this.addNote = this.addNote.bind(this)
    this.togglePinned = this.togglePinned.bind(this)
    this.putNote = this.putNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
  }
  componentDidMount() {
    axios.get(url, config)
      .then(res => this.setState({ notes: addKey(res.data) }))
      .catch(err => this.setState({ notes: err }))
  }
  toggleHamburger = () => this.setState(
    ({ hamburger }) => ({ hamburger: !hamburger })
  )
  addNote = (data, callback) => {
    axios.post(url, data, config)
      .then(res => {
        this.setState(
          ({ notes }) => ({ notes: addKey(concat(notes, res.data)) }),
          callback(res)
        )
      })
      .catch(err => this.setState({ notes: err }))
  }
  togglePinned = _id => () => this.setState(
    ({ pinnedLoading }) => ({ pinnedLoading: concat(pinnedLoading, _id) }),
    () => {
      const note = find(this.state.notes, { _id })
      note.pinned = !note.pinned
      this.putNote(
        note,
        res => this.setState(
          ({ pinnedLoading }) => ({ pinnedLoading: pinnedLoading.filter(x => x !== res.data._id) })
        )
      )
    }
  )
  putNote = (data, callback) => {
    axios.put(url, data, config)
      .then(res => this.setState(
        ({ notes }) => ({ notes: addKey(updateNotes(notes, res.data)) }),
        callback(res)
      ))
      .catch(err => this.setState({ notes: err }))
  }
  deleteNote = _id => () => this.setState(
    ({ deleteLoading }) => ({ deleteLoading: concat(deleteLoading, _id) }),
    () => {
      axios.delete(url, { ...config, data: { _id } })
        .then(res => this.setState(
          ({ notes, deleteLoading }) => ({
            notes: addKey(notes.filter(x => x._id !== res.data._id)),
            deleteLoading: deleteLoading.filter(x => x !== res.data._id)
          })
        ))
        .catch(err => this.setState({ notes: err }))
    }
  )
  render() {
    const { state, toggleHamburger, addNote, togglePinned, putNote, deleteNote } = this
    const { hamburger, notes, pinnedLoading, deleteLoading } = state
    return <Fragment>
      <Header
        hamburger={hamburger}
        toggleHamburger={toggleHamburger}
      />
      <Content
        notes={notes}
        pinnedLoading={pinnedLoading}
        deleteLoading={deleteLoading}
        addNote={addNote}
        togglePinned={togglePinned}
        putNote={putNote}
        deleteNote={deleteNote}
      />
    </Fragment>
  }
}

export default () => (
  <Router>
    <div className={bem('')}>
      <App />
    </div>
  </Router>
)
