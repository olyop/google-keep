import { iconButton } from '../styles.js'

const buttonRoot = {
  borderRadius: 5,
  backgroundColor: '#FFFFFF',
  border: '1px solid',
}

export default {
  save: {
    ...buttonRoot,
    borderColor: '#E0E0E0',
    boxShadow: 'none',
    marginRight: 10,
    '&:hover': {
      backgroundColor: '#E0E0E0'
    },
    '&:active': {
      backgroundColor: '#BDBDBD',
      borderColor: '#BDBDBD'
    }
  },
  cancel: {
    ...buttonRoot,
    borderColor: '#FFFFFF'
  },
  label: {
    color: '#333333',
    fontSize: 15,
    fontWeight: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconButton: {
    ...iconButton(42),
    marginRight: 0,
    borderRadius: '100%'
  },
  submittingIcon: {
    ...iconButton(22),
    marginRight: 7,
  },
  selectInput: {
    '&:before': { border: 'none !important' },
    '&:after': { border: 'none !important' }
  }
}
