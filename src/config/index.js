module.exports =
  process.env.NODE_ENV === 'production' // development or production
    ? require('./config.dev')
    : require('./config.prod')
