const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserMemoListPhraseSchema = require('../models/user_memo_list/UserMemoListPhrase');
const UserMemoListSentenceSchema = require('../models/user_memo_list/UserMemoListSentence');
const UserMemoListExpressionSchema = require('../models/user_memo_list/UserMemoListExpression');
const UserMemoListWordSchema = require('../models/user_memo_list/UserMemoListWord');

const userSchema = new Schema({
    local: {
        email: String,
        password: String,
        firstName: String,
        lastName: String,
        location: String,
        languageLevel: String,
        vocabularyOfInterest: String,
        joinDate: Date
    },
    google: {
        id: String,
        token: String,
        email: String,
        firstName: String,
        lastName: String,
        location: String,
        level: String,
        interest: String,
        joinDate: Date
    },
    memoListPhrase: [UserMemoListPhraseSchema],
    memoListSentence: [UserMemoListSentenceSchema],
    memoListExpression: [UserMemoListExpressionSchema],
    memoListWord: [UserMemoListWordSchema]
});

// this loads the schema into mongoose
mongoose.model('user', userSchema);