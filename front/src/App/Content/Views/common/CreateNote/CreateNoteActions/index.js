import React from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import Button from '../../../../../../common/Button'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'

import { componentClassNames } from '../../../../../../helpers'
import { COLORS } from '../../../../../../globals'
import { propTypes } from './props'

import './index.css'

const bem = componentClassNames('CreateNoteActions')

const CreateNoteActions = ({
  handleSubmit, initState, toggleList, handleChange,
  canSubmit, submitting, color, classes, pinned, type
}) => (
  <div className={bem('actions')}>
    <div className={bem('buttons')}>
      <Button
        onClick={handleSubmit}
        disabled={!canSubmit}
        text={submitting ? 'Saving' : 'Save'}
        textClassName={bem('cancel')}
        icon="save"
        loading={submitting}
        loadingSize={24}
        className={bem('save')}
        border="1px solid #E0E0E0"
        borderRadius="5px"
        padding={8}
      />
      <Select
        value={color}
        onChange={handleChange('color')}
        input={<Input classes={{ underline: classes.selectInput }} />}
      >
        {COLORS.map(color => (
          <MenuItem key={color} value={color} style={{ paddingLeft: 11 }}>
            <div className={bem('color-item')} style={{ backgroundColor: color }} />
          </MenuItem>
        ))}
      </Select>
      <Button
        onClick={initState}
        text="Cancel"
        textClassName={bem('cancel')}
        padding="12px 8px"
      />
    </div>
    <div className={bem('settings')}>
      <Select
        value={type}
        onChange={handleChange('type')}
        classes={{ root: classes.root, select: classes.select }}
        input={<Input classes={{ underline: classes.selectInput }} />}
      >
        {['note', 'list'].map(type => (
          <MenuItem key={type} value={type}>
            <i className="material-icons">{type}</i>
          </MenuItem>
        ))}
      </Select>
      <Button
        onClick={handleChange('pinned', true)}
        icon={pinned ? 'turned_in' : 'turned_in_not'}
        iconClassName={bem('settings-icon')}
        padding={7}
      />
    </div>
  </div>
)

CreateNoteActions.propTypes = propTypes

export default CreateNoteActions
