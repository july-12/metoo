const { getInput }  = require('@actions/core')

console.log(process.env)
console.log('==============')
console.log(getInput('token'))
console.log(getInput('other_token'))
console.log('==============')