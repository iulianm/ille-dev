import React from 'react';

export default (phrase, counter, reviewFieldsArray) => {

    reviewFieldsArray[counter] =

        <div key={counter} className='phrase-new-form-box'>
            <div className='row'>
                <label>Phrase Content</label>
                <div>{phrase.content}</div>
            </div>

            <div className='row'>
                <label>No. of Sentences</label>
                <div>{phrase.no_sentences}</div>
            </div>

            <div className='row'>
                <label>No. of Connectors</label>
                <div>{phrase.no_connectors}</div>
            </div>

            <div className='row'>
                <label>No. of Words</label>
                <div>{phrase.no_words}</div>
            </div>

            <div className='row'>
                <label>No. of Expressions</label>
                <div>{phrase.no_expressions}</div>
            </div>

            <div className='row'>
                <label>No. of Punctuations</label>
                <div>{phrase.no_punctuations}</div>
            </div>

            <div className='row'>
                <label>Paragraph Position</label>
                <div>{phrase.paragraph_position}</div>
            </div>

            <div className='row'>
                <label>Domain</label>
                <div>{phrase.domain}</div>
            </div>

            <div className='row'>
                <label>Domain Level</label>
                <div>{phrase.domain_level}</div>
            </div>

            <div className='row'>
                <label>Grammar Level</label>
                <div>{phrase.grammar_level}</div>
            </div>
        </div>
}
