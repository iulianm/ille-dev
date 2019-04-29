const mongoose = require('mongoose');
const { Schema } = mongoose;
const WordCompoundSubdoc = require('./WordCompoundSubdoc');

const wordVocabularySchema = new Schema({
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
    _words: [
        {
            type: Schema.Types.ObjectId,
            ref: 'word'
        }
    ]
})

const wordVocabulary = mongoose.model('wordVocabulary', wordVocabularySchema);

module.exports = wordVocabulary;
