import { inRange } from 'lodash'

export const checkCanSubmit = ({ title, note, color, pinned }) => {
  let flag = true
  if (inRange(title.length, 64) === false) { flag = false }
  if (inRange(note.length, 256) === false) { flag = false }
  if (note === '') { flag = false }
  return flag
}
