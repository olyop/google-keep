import React, { Fragment } from 'react'

import AxiosError from '../../../../common/AxiosError'
import Loading from '../../../../common/Loading'
import Button from '../../../../common/Button'
import CreateNote from '../common/CreateNote'
import Notes from '../common/Notes'

import { componentClassNames } from '../../../../helpers'
import { isNull, isArray, isError } from 'lodash'
import { propTypes } from './props'

import './index.css'

const bem = componentClassNames('NotesView')

// const Heading = text => (
//   <div className={bem('heading-container')}>
//     <Button
//       icon={'minimize'}
//       borderRadius={5}
//       padding={0}
//     />
//     <h1 className={bem('heading')}>{text}</h1>
//   </div>
// )

const NotesViewSection =

const NotesView = ({ notes, pinnedLoading, deleteLoading, addNote, togglePinned, putNote, deleteNote }) => {
  if (isError(notes)) {
    return <AxiosError err={notes} />
  } else if (isNull(notes)) {
    return <Loading />
  } else if (isArray(notes)) {
    const pinnedNotes = notes.filter(note => note.pinned)
    const notPinnedNotes = notes.filter(note => note.pinned === false)
    const isPinnedEmpty = pinnedNotes.length === 0
    const isNotPinnedEmpty = notPinnedNotes.length === 0
    const notesProps = { pinnedLoading, deleteLoading, togglePinned, putNote, deleteNote }
    return <Fragment>
      <div className={bem('create-container')}>
        <CreateNote
          className={bem('create')}
          handleSubmit={addNote}
        />
      </div>
      <div className={bem('notes')}>
        {isPinnedEmpty ? null : <Fragment>
          <h1 className={bem('heading')}>Pinned</h1>
          <Notes
            notes={pinnedNotes}
            className={bem('notes-pinned')}
            {...notesProps}
          />
        </Fragment>}
        {(isPinnedEmpty && !isNotPinnedEmpty) || isNotPinnedEmpty ? null : (
          <h1 className={bem('heading')}>Others</h1>
        )}
        {isNotPinnedEmpty ? null : <Fragment>
          <Notes
            notes={notPinnedNotes}
            className={bem('notes-not-pinned')}
            {...notesProps}
          />
        </Fragment>}
      </div>
    </Fragment>
  } else {
    return null
  }
}

NotesView.propTypes = propTypes

export default props => (
  <div className={bem('')}>
    <NotesView {...props} />
  </div>
)
