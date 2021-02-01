const {Schema, model} = require('mongoose')

const TestType = new Schema({
    name: {type: String, unique: true}
})

module.exports = model('TestType', TestType)