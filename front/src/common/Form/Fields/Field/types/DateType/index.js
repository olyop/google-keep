import React from 'react'
import { object } from 'prop-types'

import shortid from 'shortid'

import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import HelperText from '../../HelperText'
import Label from '../../Label'

import { daysInMonthArr } from '../../../../helpers'
import { months, years } from '../../../../globals'

const DateType = ({val,handleChange,name,camelCase,type,required,helperText}) => (
  <div className="Field">
    <Label
      name={name}
      required={required}
    />
    <div className="Field__row">
      <Select
        name="year"
        value={val.year}
        onChange={handleChange(type, camelCase)}
        input={<Input />}
        style={{ marginRight: 8 }}
        autoWidth
        children={years.map(year => (
          <MenuItem
            key={shortid.generate()}
            value={year}
            children={year}
          />
        ))}
      />
      <Select
        name="month"
        value={val.month}
        onChange={handleChange(type, camelCase)}
        input={<Input />}
        style={{ marginRight: 8 }}
        children={months.map((month, index) => (
          <MenuItem
            key={shortid.generate()}
            value={index}
            children={month}
          />
        ))}
      />
      <Select
        name="day"
        value={val.day}
        onChange={handleChange(type, camelCase)}
        input={<Input />}
        children={daysInMonthArr(val.month, val.year).map((day, index) => (
          <MenuItem
            key={shortid.generate()}
            value={day}
            children={day}
          />
        ))}
      />
    </div>
    <HelperText
      text={helperText}
    />
  </div>
)

DateType.propTypes = {
  val: object.isRequired
}

export default DateType
