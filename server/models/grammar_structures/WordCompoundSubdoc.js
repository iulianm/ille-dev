const mongoose = require('mongoose');
const { Schema } = mongoose;

const wordCompoundSubdocSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    grammatical_function: {
        type: String
    },
    _wordCompound: [
        {
            type: Schema.Types.ObjectId,
            ref: 'wordCompound'
        }
    ]
})

module.exports = wordCompoundSubdocSchema;
