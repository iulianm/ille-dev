const mongoose = require('mongoose');
const { Schema } = mongoose;

const expressionSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    no_words: {
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
    ]
})

const Expression = mongoose.model('expression', expressionSchema);;

module.exports = Expression;


