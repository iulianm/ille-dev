const mongoose = require('mongoose');
const { Schema } = mongoose;
const SentenceSubdoc = require('./SentenceSubdoc');
const PunctuationSubdoc = require('./PunctuationSubdoc');

const phraseSubdocSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    no_sentences: {
        type: Number,
        required: true
    },
    no_connectors: {
        type: Number,
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
    paragraph_position: {
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
    sentenceSubdoc: [SentenceSubdoc],
    punctuationSubdoc: [PunctuationSubdoc],
    _phrases: [
        {
            type: Schema.Types.ObjectId,
            ref: 'phrase'
        }
    ]
})

module.exports = phraseSubdocSchema;
