import { string, number, bool, object, oneOfType } from 'prop-types'

export const propTypes = {
  classes: object.isRequired,
  padding: oneOfType([ number, string ]),
  border: string,
  borderRadius: string,
  icon: string,
  iconClassName: string,
  text: string,
  textClassName: string,
  loading: bool,
  loadingHideText: bool,
  loadingSize: number,
  iconTextSpace: number
}

export const defaultProps = {
  padding: 5,
  border: null,
  borderRadius: null,
  icon: undefined,
  iconClassName: undefined,
  text: undefined,
  textClassName: undefined,
  loading: false,
  loadingHideText: false,
  loadingSize: 20,
  iconTextSpace: 3
}
