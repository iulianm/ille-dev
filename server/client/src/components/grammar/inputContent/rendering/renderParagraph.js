import React from "react";
import { Field, FieldArray } from "redux-form";
import * as inputField from "./renderField";
import renderPhrase from "./renderPhrase";
import { DOMAIN_OPTIONS, LEVEL_OPTIONS } from "../options/options";
import ParagraphContentInput from './ParagraphContentInput';

export default ({ fields, meta: { error, warning } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Paragraph
          </button>
    </li>
    {fields.map((paragraphs, index) => (
      <li key={index}>
        <div className="paragraph-new-form-box">
          <div className="row">
            <h3>Paragraph #{index + 1}</h3>
            <button type="button" onClick={() => fields.remove(index)}>
              <i className="fa fa-times">Delete Paragraph</i>
            </button>
            <Field
              label="Content"
              name={`${paragraphs}.content`}
              type="text"
              component={ParagraphContentInput}
              paragraphDepth={index}
            />
            <Field
              label="No. of Phrases"
              name={`${paragraphs}.no_phrases`}
              type="text"
              parse={value => (isNaN(parseInt(value, 10)) ? "" : parseInt(value, 10))}
              component={inputField.renderInput}
            />
            <Field
              label="No. of Sentences"
              name={`${paragraphs}.no_sentences`}
              type="text"
              parse={value => (isNaN(parseInt(value, 10)) ? "" : parseInt(value, 10))}
              component={inputField.renderInput}
            />
            <Field
              label="No. of Words"
              name={`${paragraphs}.no_words`}
              type="text"
              parse={value => (isNaN(parseInt(value, 10)) ? "" : parseInt(value, 10))}
              component={inputField.renderInput}
            />
            <Field
              label="No. of Expressions"
              name={`${paragraphs}.no_expressions`}
              type="text"
              parse={value => (isNaN(parseInt(value, 10)) ? "" : parseInt(value, 10))}
              component={inputField.renderInput}
            />
            <Field
              label="Domain"
              name={`${paragraphs}.domain`}
              type="text"
              component={inputField.renderSelect}
              optionsList={DOMAIN_OPTIONS}
            />
            <Field
              label="Level"
              name={`${paragraphs}.level`}
              type="text"
              component={inputField.renderSelect}
              optionsList={LEVEL_OPTIONS}
            />
            <FieldArray
              name={`${paragraphs}.phraseSubdoc`}
              component={renderPhrase}
              paragraphDepth={index}
            />
          </div>
        </div>
      </li>
    ))}
    {error && <li className="error">{error}</li>}
    {warning && <li className="error">{warning}</li>}
  </ul>
)