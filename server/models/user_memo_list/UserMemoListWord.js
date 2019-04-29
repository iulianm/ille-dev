const mongoose = require('mongoose');
const { Schema } = mongoose;

const userMemoListWordSchema = new Schema({
    _words: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Word'
        }
    ]
})

module.exports = userMemoListWordSchema;