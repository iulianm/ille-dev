import React from 'react';
import { Field } from 'redux-form';
import * as inputField from './renderField';
import { DOMAIN_OPTIONS, LEVEL_OPTIONS } from '../options/options';

export default ({ fields, meta: { error, warning } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push()}>Add Expression</button>
        </li>
        {fields.map((expressions, index) =>
            <li key={index}>
                <div className='expression-new-form-box'>
                    <div className='row'>
                        <h4>Expression #{index + 1}</h4>
                        <button
                            type='button'
                            onClick={() => fields.remove(index)}><i className='fa fa-times'></i>
                        </button>
                        <Field
                            label='Content'
                            name={`${expressions}.content`}
                            type='text'
                            component={inputField.renderTextArea} />
                        <Field
                            label='No. of Words'
                            name={`${expressions}.no_words`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='Domain'
                            name={`${expressions}.domain`}
                            type='text'
                            component={inputField.renderSelect}
                            optionsList={DOMAIN_OPTIONS} />
                        <Field
                            label='Level'
                            name={`${expressions}.level`}
                            type='text'
                            component={inputField.renderSelect}
                            optionsList={LEVEL_OPTIONS}
                        />
                    </div>
                </div>
            </li>
        )}
        {error && <li className="error">{error}</li>}
        {warning && <li className="error">{warning}</li>}
    </ul>
)