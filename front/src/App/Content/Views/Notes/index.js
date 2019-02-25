import React, { Fragment } from 'react'

import AxiosError from '../../../../common/AxiosError'
import Loading from '../../../../common/Loading'
import CreateNote from '../common/CreateNote'
import Notes from '../common/Notes'

import { componentClassNames } from '../../../../helpers'
import { isNull, isArray, isError } from 'lodash'
import { propTypes } from './props'

import './index.css'

const bem = componentClassNames('NotesView')

const NotesView = ({ notes, pinnedLoading, deleteLoading, addNote, togglePinned, putNote, deleteNote }) => {
  if (isError(notes)) {
    return <AxiosError err={notes} />
  } else if (isNull(notes)) {
    return <Loading />
  } else if (isArray(notes)) {
    return <Fragment>
      <CreateNote
        {...bem('create')}
        handleSubmit={addNote}
      />
      <Notes
        notes={notes}
        pinnedLoading={pinnedLoading}
        deleteLoading={deleteLoading}
        togglePinned={togglePinned}
        putNote={putNote}
        deleteNote={deleteNote}
      />
    </Fragment>
  } else {
    return null
  }
}

NotesView.propTypes = propTypes

export default props => (
  <div {...bem('')}>
    <NotesView {...props} />
  </div>
)
