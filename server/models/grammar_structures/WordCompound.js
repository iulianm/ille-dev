const mongoose = require('mongoose');
const { Schema } = mongoose;

const wordCompoundSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    grammatical_function: {
        type: String
    },
    _words: [
        {
            type: Schema.Types.ObjectId,
            ref: 'word'
        }
    ]
})

const WordCompound = mongoose.model('wordCompound', wordCompoundSchema);

module.exports = WordCompound;
