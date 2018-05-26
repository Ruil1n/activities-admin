'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"http://101.132.70.132:8082/"'
  // BASE_URL: '"https://www.easy-mock.com/mock/5a7bfd3ea7b3ff4311b6778f/dev"'
})
