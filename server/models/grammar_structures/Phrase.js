const mongoose = require('mongoose');
const { Schema } = mongoose;
const SentenceSubdoc = require('./SentenceSubdoc');
const PunctuationSubdoc = require('./PunctuationSubdoc');

const phraseSchema = new Schema({
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
    _paragraphs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'paragraph'
        }
    ]
});

const Phrase = mongoose.model('phrase', phraseSchema);

module.exports = Phrase;