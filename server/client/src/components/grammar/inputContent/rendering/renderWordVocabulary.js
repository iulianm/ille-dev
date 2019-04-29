import React from 'react';
import { Field, FieldArray } from 'redux-form';
import * as inputField from './renderField';
import renderWordCompound from './renderWordCompound';

export default ({ fields, meta: { error, warning } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.length < 1 && fields.push()}>Add Vocabulary Details (just 1 entry)</button>
        </li>
        {fields.map((wordVocabulary, index) =>
            <li key={index}>
                <div className='wordVocabulary-new-form-box'>
                    <div className='row'>
                        <h4>Word Vocabulary #{index + 1}</h4>
                        <button
                            type='button'
                            onClick={() => fields.remove(index)}><i className='fa fa-times'></i>
                        </button>
                        <Field
                            label='Pronunciation'
                            name={`${wordVocabulary}.pronunciation`}
                            type='text'
                            component={inputField.renderInput} />
                        <Field
                            label='Definition'
                            name={`${wordVocabulary}.definition`}
                            type='text'
                            component={inputField.renderInput} />
                        <FieldArray
                            name={`${wordVocabulary}.compoundSubdoc`}
                            component={renderWordCompound} />
                        <Field
                            label='Synonyms'
                            name={`${wordVocabulary}.synonyms`}
                            type='text'
                            component={inputField.renderInput} />
                        <Field
                            label='Antonyms'
                            name={`${wordVocabulary}.antonyms`}
                            type='text'
                            component={inputField.renderInput} />
                        <Field
                            label='Derived Terms'
                            name={`${wordVocabulary}.derived_terms`}
                            type='text'
                            component={inputField.renderInput} />
                    </div>
                </div>
            </li>
        )}
        {error && <li className="error">{error}</li>}
        {warning && <li className="error">{warning}</li>}
    </ul>
)