const API = {
  URL: 'http://localhost:3000/api',
  get ACCOUNTS() {
    const { URL } = this
    return `${URL}/accounts`
  },
  get NOTES() {
    const { URL } = this
    return `${URL}/notes`
  }
}

export const API_ACCOUNTS = API.ACCOUNTS
export const API_NOTES = API.NOTES

const AWS = {
  URL: 'https://s3-ap-southeast-2.amazonaws.com/google-keep-clone',
  get LOGO() {
    const { URL } = this
    return `${URL}/logo-32x32.png`
  },
  get DEFAULT_DP() {
    const { URL } = this
    return `${URL}/default-dp.jpg`
  }
}

export const AWS_LOGO = AWS.LOGO
export const AWS_DEFAULT_DP = AWS.DEFAULT_DP

export const AXIOS_CONFIG = {
  headers: {
    'Accept': 'application/json'
  }
}

export const COLORS = [
  '#FFFFFF',
  '#E0E0E0',
  '#F28B82',
  '#FBBC04',
  '#FFF475',
  '#CCFF90',
  '#A7FFEB',
  '#CBF0F8',
  '#AECBFA',
  '#D7AEFB',
  '#FDCFE8',
  '#E6C9A8'
]
