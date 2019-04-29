import React from 'react';
import { Field } from 'redux-form';
import * as inputField from './renderField';

export default ({ parent, fields, meta: { error, warning } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push()}>Add Punctuation</button>
        </li>
        {fields.map((punctuations, index) =>
            <li key={index}>
                <div className='punctuation-new-form-box'>
                    <div className='row'>
                        <h4>Punctuation
                            {
                                parent === 'sentence' ? ' Sentence '
                                    : parent === 'phrase' ? ' Phrase '
                                        : parent === 'word' ? ' Word ' : ''
                            }

                            #{index + 1}
                        </h4>
                        <button
                            type='button'
                            onClick={() => fields.remove(index)}><i className='fa fa-times'></i>
                        </button>
                        <Field
                            label='Content'
                            name={`${punctuations}.content`}
                            type='text'
                            component={inputField.renderTextArea} />
                        <Field
                            label='Phrase Position'
                            name={`${punctuations}.phrase_position`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='Phrase Function'
                            name={`${punctuations}.phrase_function`}
                            type='text'
                            component={inputField.renderInput} />
                        <Field
                            label='Sentence Position'
                            name={`${punctuations}.sentence_position`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='Sentence Function'
                            name={`${punctuations}.sentence_function`}
                            type='text'
                            component={inputField.renderInput} />
                        <Field
                            label='Word Position'
                            name={`${punctuations}.word_position`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='Word Function'
                            name={`${punctuations}.word_function`}
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