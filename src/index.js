require('@babel/register')({ presets: ['@babel/preset-env'] })
  
const app = require('./app')
  
module.exports = app
  