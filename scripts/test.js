const { getInput } = require('@actions/core')

console.log(getInput('test_token'))

console.log(process.env)