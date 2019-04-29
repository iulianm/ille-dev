const mongoose = require('mongoose');
const { Schema } = mongoose;

const punctuationSchema = new Schema({
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
    _phrases: [
        {
            type: Schema.Types.ObjectId,
            ref: 'phrase'
        }
    ],
    _sentences: [
        {
            type: Schema.Types.ObjectId,
            ref: 'sentence'
        }
    ],
    _expressions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'expression'
        }
    ],
    _words: [
        {
            type: Schema.Types.ObjectId,
            ref: 'word'
        }
    ]
})

const Punctuation = mongoose.model('punctuation', punctuationSchema);;

module.exports = Punctuation;


