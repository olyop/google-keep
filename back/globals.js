const DB = {
  PROTOCOL: 'mongodb://',
  DOMAIN: '127.0.0.1',
  PORT: 27017,
  NAME: 'google-keep',
  get URL() {
    const { PROTOCOL, DOMAIN, PORT, NAME } = this
    return `${PROTOCOL}${DOMAIN}:${PORT}/${NAME}`
  }
}

exports.DB_URL = DB.URL

exports.MONGOOSE_CONFIG = { useNewUrlParser: true }
