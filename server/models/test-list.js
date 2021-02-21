const {Schema, model} = require('mongoose')

const TestList = new Schema({
    name: {type: String, unique: true},
    test: String
})

module.exports = model('TestList', TestList)
