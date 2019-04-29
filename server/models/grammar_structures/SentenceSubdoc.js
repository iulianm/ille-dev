const mongoose = require('mongoose');
const { Schema } = mongoose;
const ExpressionSubdoc = require('./ExpressionSubdoc');
const WordSubdoc = require('./WordSubdoc');
const PunctuationSubdoc = require('./PunctuationSubdoc');

const sentenceSubdocSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    no_words: {
        type: Number,
        required: true
    },
    no_expressions: {
        type: Number,
        required: true
    },
    no_punctuations: {
        type: Number,
        required: true
    },
    phrase_position: {
        type: Number,
        required: true
    },
    phrase_function: {
        type: String,
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
    expressionSubdoc: [ExpressionSubdoc],
    wordSubdoc: [WordSubdoc],
    punctuationSubdoc: [PunctuationSubdoc],
    _sentences: [
        {
            type: Schema.Types.ObjectId,
            ref: 'sentence'
        }
    ]
})

module.exports = sentenceSubdocSchema;
