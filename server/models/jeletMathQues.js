const { path } = require('express/lib/application')
const mongoose = require('mongoose')

const mathSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    questionImagePath: {
        type: [String]
    },
    solution: {
        type: String,
        required: true,
    },
    solutionImage: {
        type: [String]
    },
    isPreviousYearQuestion: {
        type: Boolean,
        required: true,
        default: false
    },
    year: {
        type: String,
        default: null
    },
    chapter: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('mathQuesUp', mathSchema)