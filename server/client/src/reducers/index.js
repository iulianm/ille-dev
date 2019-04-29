import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import fetchPhrasesReducer from './fetchPhrasesReducer';
import checkParagraphContentReducer from './checkParagraphContentReducer';

export default combineReducers({
    auth: authReducer,
    phrases: fetchPhrasesReducer,
    form: reduxForm,
    checkParagraphContent: checkParagraphContentReducer
});