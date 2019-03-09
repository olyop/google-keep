import he from 'he'

import { pipe } from '../../../../helpers'

const decodeNoteField = fields => ({
  ...fields,
  note: he.unescape(fields.note)
})

const trimFields = fields => ({
  ...fields,
  title: fields.title.trim(),
  note: fields.note.trim()
})

export const submitFields = fields => (
  pipe(fields)(decodeNoteField, trimFields)
)
