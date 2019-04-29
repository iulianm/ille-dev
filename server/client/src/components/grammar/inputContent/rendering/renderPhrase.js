import React from 'react';
import { Field, FieldArray } from 'redux-form';
import * as inputField from './renderField';
import renderSentence from './renderSentence';
import renderPunctuation from './renderPunctuation';
import { DOMAIN_OPTIONS, LEVEL_OPTIONS } from '../options/options';
import PhraseContentInput from './PhraseContentInput';

export default ({ fields, meta: { error, warning }, paragraphDepth }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push()}>Add Phrase</button>
        </li>
        {fields.map((phrases, index) =>
            <li key={index}>
                <div className='phrase-new-form-box'>
                    <div className='row'>
                        <h4>Phrase #{index + 1}</h4>
                        <button
                            type='button'
                            onClick={() => fields.remove(index)}><i className='fa fa-times'>Delete Phrase</i>
                        </button>
                        <Field
                            label='Content'
                            name={`${phrases}.content`}
                            type='text'
                            component={PhraseContentInput}
                            paragraphDepth={paragraphDepth}
                            phraseDepth={index} />
                        <Field
                            label='No. of Sentences'
                            name={`${phrases}.no_sentences`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='No. of Connectors'
                            name={`${phrases}.no_connectors`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='No. of Words'
                            name={`${phrases}.no_words`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='No. of Expressions'
                            name={`${phrases}.no_expressions`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='No. of Punctuations'
                            name={`${phrases}.no_punctuations`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='Paragraph Position'
                            name={`${phrases}.paragraph_position`}
                            type='text'
                            parse={value => isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10)}
                            component={inputField.renderInput} />
                        <Field
                            label='Domain'
                            name={`${phrases}.domain`}
                            type='text'
                            component={inputField.renderSelect}
                            optionsList={DOMAIN_OPTIONS} />
                        <Field
                            label='Level'
                            name={`${phrases}.level`}
                            type='text'
                            component={inputField.renderSelect}
                            optionsList={LEVEL_OPTIONS}
                        />
                        <FieldArray
                            name={`${phrases}.sentenceSubdoc`}
                            component={renderSentence}
                        />
                        <FieldArray
                            name={`${phrases}.punctuationSubdoc`}
                            component={renderPunctuation}
                            parent='phrase'
                        />
                    </div>
                </div>
            </li>
        )}
        {error && <li className="error">{error}</li>}
        {warning && <li className="error">{warning}</li>}
    </ul>
)