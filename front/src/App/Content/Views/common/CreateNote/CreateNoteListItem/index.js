import React from 'react'

import Button from '../../../../../../common/Button'

import { componentClassNames } from '../../../../../../helpers'
import { propTypes } from './props'

import './index.css'

const bem = componentClassNames('CreateNoteListItem')

const CreateNoteListItem = ({ handleListChange, toggleListItemChecked, index, checked, text }) => (
  <div className={bem('')}>
    <Button
      onClick={toggleListItemChecked(index)}
      className={bem('checked')}
      icon={checked ? 'check_box' : 'check_box_outline_blank'}
    />
    <input
      className={bem('input')}
      onChange={handleListChange(index)}
      value={text}
    />
  </div>
)

CreateNoteListItem.propTypes = propTypes

export default CreateNoteListItem
