const mongoose = require('mongoose');
const { Schema } = mongoose;
const PhraseSubdoc = require('./PhraseSubdoc');

const paragraphSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    no_phrases: {
        type: Number,
        required: true
    },
    no_sentences: {
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
    domain: [{
        type: String,
        required: true
    }],
    level: {
        type: String,
        required: true
    },
    phraseSubdoc: [PhraseSubdoc]
})

const Paragraph = mongoose.model('paragraph', paragraphSchema);

module.exports = Paragraph;
