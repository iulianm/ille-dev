import React from 'react';
import { Field } from 'redux-form';
import * as inputField from './renderField';

export default ({ fields, meta: { error, warning } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push()}>Add Word Compound</button>
        </li>
        {fields.map((wordCompound, index) =>
            <li key={index}>
                <div className='wordCompound-new-form-box'>
                    <div className='row'>
                        <h4>Word Compound #{index + 1}</h4>
                        <button
                            type='button'
                            onClick={() => fields.remove(index)}><i className='fa fa-times'></i>
                        </button>
                        <Field
                            label='Content'
                            name={`${wordCompound}.content`}
                            type='text'
                            component={inputField.renderInput} />
                        <Field
                            label='Grammatical Function'
                            name={`${wordCompound}.grammatical_function`}
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