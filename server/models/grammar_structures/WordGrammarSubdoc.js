const mongoose = require('mongoose');
const { Schema } = mongoose;

const wordGrammarSubdocSchema = new Schema({
    grammatical_function: {
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
    phrase_position: {
        type: Number,
        required: true
    },
    phrase_function: {
        type: String,
        required: true
    },
    expression_position: {
        type: Number,
        required: true
    }
})

module.exports = wordGrammarSubdocSchema;
