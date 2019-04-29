const mongoose = require('mongoose');
const { Schema } = mongoose;

const userMemoListExpressionSchema = new Schema({
    _expressions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Expression'
        }
    ]
})

module.exports = userMemoListExpressionSchema;