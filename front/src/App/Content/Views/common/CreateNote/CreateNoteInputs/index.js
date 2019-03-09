import React, { Fragment } from 'react'

import CreateNoteListItem from '../CreateNoteListItem'
import Button from '../../../../../../common/Button'
import ContentEditable from 'react-contenteditable'

import { componentClassNames } from '../../../../../../helpers'
import { propTypes } from './props'

import './index.css'

const bem = componentClassNames('CreateNoteInputs')

const CreateNoteInputs = ({
  handleChange, handleListChange, toggleListItemChecked,
  type, title, note, listItems
}) => (
  <div className={bem('')}>
    <input
      className={bem('title')}
      value={title}
      onChange={handleChange('title')}
      type="text"
      placeholder="Title"
    />
    <div className={bem('textarea')}>
      {type === 'note' ? <Fragment>
        <ContentEditable
          className={bem('note')}
          html={note}
          onChange={handleChange('note')}
        />
        {note === '' ? <div className={bem('placeholder')}>Take a note...</div> : null}
      </Fragment> : <Fragment>
        {listItems.map(item => (
          <CreateNoteListItem
            key={item.index}
            handleListChange={handleListChange}
            toggleListItemChecked={toggleListItemChecked}
            {...item}
          />
        ))}
        <Button
          className={bem('add-button')}
          icon={'add'}
          iconClassName={bem('add-icon')}
          text={'List Item'}
          textClassName={bem('add-text')}
        />
      </Fragment>}
    </div>
  </div>
)

CreateNoteInputs.propTypes = propTypes

export default CreateNoteInputs
