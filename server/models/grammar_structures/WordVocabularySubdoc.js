const mongoose = require('mongoose');
const { Schema } = mongoose;
const WordCompoundSubdoc = require('./WordCompoundSubdoc');

const wordVocabularySubdocSchema = new Schema({
    pronunciation: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    },
    compoundSubdoc: [WordCompoundSubdoc],
    synonyms: [{
        type: String,
        required: true
    }],
    antonyms: [{
        type: String,
        required: true
    }],
    derivedTerms: [{
        type: String,
        required: true
    }],
    _wordsVocabulary: [
        {
            type: Schema.Types.ObjectId,
            ref: 'wordVocabulary'
        }
    ]
})

module.exports = wordVocabularySubdocSchema;
