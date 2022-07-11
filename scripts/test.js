const path = require('path')
const { getInput }  = require('@actions/core')
require('dotenv').config()

console.log(process.env)
console.log('==============')
console.log(getInput('token'))
console.log('==============')