const mongoose = require('mongoose');
const { Schema } = mongoose;

const userMemoListPhraseSchema = new Schema({
    _phrases: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Phrase'
        }
    ]
})

module.exports = userMemoListPhraseSchema;