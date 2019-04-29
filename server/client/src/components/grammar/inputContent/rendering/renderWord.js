import React from 'react';
import { Field, FieldArray } from 'redux-form';
import * as inputField from './renderField';
import renderWordGrammar from './renderWordGrammar';
import renderWordVocabulary from './renderWordVocabulary';
import renderPunctuation from './renderPunctuation';
import { DOMAIN_OPTIONS, LEVEL_OPTIONS } from '../options/options';

export default ({ fields, meta: { error, warning } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push()}>Add Word</button>
        </li>
        {fields.map((words, index) =>
            <li key={index}>
                <div className='word-new-form-box'>
                    <div className='row'>
                        <h4>Word #{index + 1}</h4>
                        <button
                            type='button'
                            onClick={() => fields.remove(index)}><i className='fa fa-times'></i>
                        </button>
                        <Field
                            label='Content'
                            name={`${words}.content`}
                            type='text'
                            component={inputField.renderInput} />
                        <Field
                            label='Domain'
                            name={`${words}.domain`}
                            type='text'
                            component={inputField.renderSelect}
                            optionsList={DOMAIN_OPTIONS} />
                        <Field
                            label='Level'
                            name={`${words}.level`}
                            type='text'
                            component={inputField.renderSelect}
                            optionsList={LEVEL_OPTIONS}
                        />
                        <FieldArray
                            name={`${words}.wordGrammarSubdoc`}
                            component={renderWordGrammar}
                        />
                        <FieldArray
                            name={`${words}.wordVocabularySubdoc`}
                            component={renderWordVocabulary}
                        />
                        <FieldArray
                            name={`${words}.punctuationSubdoc`}
                            component={renderPunctuation}
                            parent='word'
                        />
                    </div>
                </div>
            </li>
        )}
        {error && <li className="error">{error}</li>}
        {warning && <li className="error">{warning}</li>}
    </ul>
)