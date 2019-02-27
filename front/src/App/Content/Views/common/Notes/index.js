import React from 'react'

import Note from '../Note'

import { componentClassNames } from '../../../../../helpers'
import { propTypes } from './props'

import './index.css'

const bem = componentClassNames('Notes')

const Notes = ({
  notes, pinnedLoading, deleteLoading,
  togglePinned, putNote, deleteNote, className
}) => (
  <div className={bem({ ignore: true, className }, '')}>
    {notes.map(note => (
      <Note
        {...note}
        pinnedLoading={pinnedLoading}
        deleteLoading={deleteLoading}
        togglePinned={togglePinned}
        putNote={putNote}
        deleteNote={deleteNote}
      />
    ))}
  </div>
)

Notes.propTypes = propTypes

export default Notes
