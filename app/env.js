const envalid = require('envalid')

const { host, port, str, url } = envalid

module.exports = envalid.cleanEnv(
  process.env,
  {
    HOST: host({ default: '0.0.0.0' }),
    PORT: port({ default: 3000 }),
    LOG_LEVEL: str({ default: 'info', devDefault: 'debug' }),
    ADWISAR_SCHEMA_URL: url(),
    ADWISAR_DATA_URL: url(),
  },
  {
    strict: true,
  }
)