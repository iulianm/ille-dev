const mongoose = require('mongoose');
const { Schema } = mongoose;
const WordGrammarSubdoc = require('./WordGrammarSubdoc');
const WordVocabularySubdoc = require('./WordVocabularySubdoc');
const PunctuationSubdoc = require('./PunctuationSubdoc');

const wordSubdocSchema = new Schema({
    content: {
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
    wordGrammarSubdoc: [WordGrammarSubdoc],
    wordVocabularySubdoc: [WordVocabularySubdoc],
    punctuationSubdoc: [PunctuationSubdoc],
    _words: [
        {
            type: Schema.Types.ObjectId,
            ref: 'word'
        }
    ]
})

module.exports = wordSubdocSchema;
