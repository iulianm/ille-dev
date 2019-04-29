import React from 'react';
import { Field } from 'redux-form';
import * as inputField from './renderField';
import { GRAMMATICAL_FUNCTIONS, SENTENCE_FUNCTIONS, PHRASE_FUNCTIONS } from '../options/options';

export default ({ fields, meta: { error, warning } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.length < 1 && fields.push()}>Add Grammar Details (just 1 entry)</button>
        </li>
        {fields.map((grammarDetails, index) =>
            <li key={index}>
                <div className='wordGrammar-new-form-box'>
                    <div className='row'>
                        <h4>Word Grammar #{index + 1}</h4>
                        <button
                            type='button'
                            onClick={() => fields.remove(index)}><i className='fa fa-times'></i>
                        </button>
                        <Field
                            label='Grammatical Function'
                            name={`${grammarDetails}.grammatical_function`}
                            type='text'
                            component={inputField.renderSelect}
                            optionsList={GRAMMATICAL_FUNCTIONS} />
                        <Field
                            label='Sentence Position'
                            name={`${grammarDetails}.sentence_position`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='Sentence Function'
                            name={`${grammarDetails}.sentence_function`}
                            type='text'
                            component={inputField.renderSelect}
                            optionsList={SENTENCE_FUNCTIONS} />
                        <Field
                            label='Phrase Position'
                            name={`${grammarDetails}.phrase_position`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='Phrase Function'
                            name={`${grammarDetails}.phrase_function`}
                            type='text'
                            component={inputField.renderSelect}
                            optionsList={PHRASE_FUNCTIONS} />
                        <Field
                            label='Expression Position'
                            name={`${grammarDetails}.expression_position`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                    </div>
                </div>
            </li>
        )}
        {error && <li className="error">{error}</li>}
        {warning && <li className="error">{warning}</li>}
    </ul>
)