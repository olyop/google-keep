import React from 'react'

import Field from './Field'

import { propTypes } from './props'

const Fields = ({ state, handleChange, fields }) => (
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

Fields.propTypes = propTypes

export default Fields
