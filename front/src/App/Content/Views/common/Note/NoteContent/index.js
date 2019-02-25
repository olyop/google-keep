import React, { Fragment } from 'react'

import ContentEditable from 'react-contenteditable'

import { componentClassNames } from '../../../../../../helpers'
import { propTypes } from './props'

const bem = componentClassNames('Note')

const NoteContent = ({ toggleEdit, handleInputChange, edit, title, note }) => (
  <div {...bem('content')}>
    {edit ? <Fragment>
      <ContentEditable
        {...bem('title')}
        html={title}
        onChange={handleInputChange('title')}
      />
      <ContentEditable
        {...bem('note')}
        html={note}
        onChange={handleInputChange('note')}
      />
    </Fragment> : <Fragment>
      {title === '' ? null : (
        <h3
          {...bem('title')}
          children={title}
          onDoubleClick={toggleEdit}
          onChange={handleInputChange('title')}
          contentEditable={edit}
        />
      )}
      <p
        {...bem('note')}
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
