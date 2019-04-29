import React from 'react';

export default (paragraph, counter, reviewFieldsArray) => {

    reviewFieldsArray[counter] =

        <div key={counter} className="paragraph-new-form-box">
            <div className="row">
                <label>Paragraph Content</label>
                <div>{paragraph.content}</div>
            </div>

            <div className="row">
                <label>No. of Phrases</label>
                <div>{paragraph.no_phrases}</div>
            </div>

            <div className="row">
                <label>No. of Sentences</label>
                <div>{paragraph.no_sentences}</div>
            </div>

            <div className="row">
                <label>No. of Words</label>
                <div>{paragraph.no_words}</div>
            </div>

            <div className="row">
                <label>No. of Expressions</label>
                <div>{paragraph.no_expressions}</div>
            </div>

            <div className="row">
                <label>Domain</label>
                <div>{paragraph.domain}</div>
            </div>

            <div className="row">
                <label>Domain Level</label>
                <div>{paragraph.domain_level}</div>
            </div>

            <div className="row">
                <label>Grammar Level</label>
                <div>{paragraph.grammar_level}</div>
            </div>
        </div>
}