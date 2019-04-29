const mongoose = require('mongoose');
const { Schema } = mongoose;
const WordSubdoc = require('./WordSubdoc');
const PunctuationSubdoc = require('./PunctuationSubdoc');

const expressionSubdocSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    no_words: {
        type: Number,
        required: true
    },
    domain: [{
        type: String,
        required: true
    }],
    level: {
        type: String,
        required: true
    },
    _expressions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'expression'
        }
    ]
})

module.exports = expressionSubdocSchema;


