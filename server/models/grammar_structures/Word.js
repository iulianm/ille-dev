const mongoose = require('mongoose');
const { Schema } = mongoose;
const WordGrammarSubdoc = require('./WordGrammarSubdoc');
const WordVocabularySubdoc = require('./WordVocabularySubdoc');
const PunctuationSubdoc = require('./PunctuationSubdoc');

const wordSchema = new Schema({
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
    ]
})

const Word = mongoose.model('word', wordSchema);

module.exports = Word;
