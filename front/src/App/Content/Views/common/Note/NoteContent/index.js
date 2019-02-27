import React, { Fragment } from 'react'

import ContentEditable from 'react-contenteditable'

import { componentClassNames } from '../../../../../../helpers'
import { propTypes } from './props'

const bem = componentClassNames('Note')

const NoteContent = ({ toggleEdit, handleInputChange, edit, title, note }) => (
  <div className={bem('content')}>
    {edit ? <Fragment>
      <ContentEditable
        className={bem('title')}
        html={title}
        onChange={handleInputChange('title')}
      />
      <ContentEditable
        className={bem('note')}
        html={note}
        onChange={handleInputChange('note')}
      />
    </Fragment> : <Fragment>
      {title === '' ? null : (
        <h3
          className={bem('title')}
          children={title}
          onDoubleClick={toggleEdit}
          onChange={handleInputChange('title')}
          contentEditable={edit}
        />
      )}
      <p
        className={bem('note')}
        children={note}
        onDoubleClick={toggleEdit}
        onChange={handleInputChange('note')}
        contentEditable={edit}
      />
    </Fragment>}
  </div>
)

NoteContent.propTypes = propTypes

export default NoteContent
