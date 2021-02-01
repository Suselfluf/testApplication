const {Schema, model} = require('mongoose')

const TestList = new Schema({
    testTypeId: String,
    test: String
})

module.exports = model('TestList', TestList)