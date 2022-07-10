const { getInput }  = require('@actions/core')

console.log('==============')
console.log(getInput('test_token'))
console.log(getInput('other_token'))
console.log('==============')