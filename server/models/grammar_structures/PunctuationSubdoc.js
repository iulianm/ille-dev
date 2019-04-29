const mongoose = require('mongoose');
const { Schema } = mongoose;

const punctuationSubdocSchema = new Schema({
    content: {
        type: String,
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
    sentence_position: {
        type: Number,
        required: true
    },
    sentence_function: {
        type: String,
        required: true
    },
    word_position: {
        type: Number
    },
    word_function: {
        type: String
    },
    _punctuations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'punctuation'
        }
    ]
})

module.exports = punctuationSubdocSchema;


