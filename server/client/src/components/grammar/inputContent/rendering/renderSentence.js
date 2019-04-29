import React from 'react';
import { Field, FieldArray } from 'redux-form';
import * as inputField from './renderField';
import renderExpression from './renderExpression';
import renderWord from './renderWord';
import renderPunctuation from './renderPunctuation';
import { DOMAIN_OPTIONS, LEVEL_OPTIONS } from '../options/options';

export default ({ fields, meta: { error, warning } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push()}>Add Sentence</button>
        </li>
        {fields.map((sentences, index) =>
            <li key={index}>
                <div className='sentence-new-form-box'>
                    <div className='row'>
                        <h4>Sentence #{index + 1}</h4>
                        <button
                            type='button'
                            onClick={() => fields.remove(index)}><i className='fa fa-times'></i>
                        </button>
                        <Field
                            label='Content'
                            name={`${sentences}.content`}
                            type='text'
                            component={inputField.renderTextArea} />
                        <Field
                            label='No. of Words'
                            name={`${sentences}.no_words`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='No. of Expressions'
                            name={`${sentences}.no_expressions`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='No. of Punctuations'
                            name={`${sentences}.no_punctuations`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='Phrase Position'
                            name={`${sentences}.phrase_position`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='Phrase Function'
                            name={`${sentences}.phrase_function`}
                            type='text'
                            component={inputField.renderInput} />
                        <Field
                            label='Domain'
                            name={`${sentences}.domain`}
                            type='text'
                            component={inputField.renderSelect}
                            optionsList={DOMAIN_OPTIONS} />
                        <Field
                            label='Level'
                            name={`${sentences}.level`}
                            type='text'
                            component={inputField.renderSelect}
                            optionsList={LEVEL_OPTIONS}
                        />
                        <FieldArray
                            name={`${sentences}.expressionSubdoc`}
                            component={renderExpression}
                        />
                        <FieldArray
                            name={`${sentences}.wordSubdoc`}
                            component={renderWord}
                        />
                        <FieldArray
                            name={`${sentences}.punctuationSubdoc`}
                            component={renderPunctuation}
                            parent='sentence'
                        />
                    </div>
                </div>
            </li>
        )}
        {error && <li className="error">{error}</li>}
        {warning && <li className="error">{warning}</li>}
    </ul>
)