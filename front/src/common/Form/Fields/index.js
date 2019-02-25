import React from 'react'
import PropTypes from 'prop-types'

import Field from './Field'

const Fields = ({state,handleChange,fields}) => (
  <div className="Form__fields">
    {fields.map(field => (
      <Field
        {...field}
        val={state.fields[field.camelCase]}
        errors={state.fieldsErr[field.camelCase]}
        handleChange={handleChange}
      />
    ))}
  </div>
)

Fields.propTypes = {
  state: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired
}

export default Fields
