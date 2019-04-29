import React from 'react';

export default (sentence, counter, reviewFieldsArray) => {

    reviewFieldsArray[counter] =

        <div key={counter} className='sentence-new-form-box'>
            <div className='row'>
                <label>Sentence Content</label>
                <div>{sentence.content}</div>
            </div>

            <div className='row'>
                <label>No. of Words</label>
                <div>{sentence.no_words}</div>
            </div>

            <div className='row'>
                <label>No. of Expressions</label>
                <div>{sentence.no_expressions}</div>
            </div>

            <div className='row'>
                <label>No. of Punctuations</label>
                <div>{sentence.no_punctuations}</div>
            </div>

            <div className='row'>
                <label>Phrase Position</label>
                <div>{sentence.phrase_position}</div>
            </div>

            <div className='row'>
                <label>Phrase Function</label>
                <div>{sentence.phrase_function}</div>
            </div>

            <div className='row'>
                <label>Domain</label>
                <div>{sentence.domain}</div>
            </div>

            <div className='row'>
                <label>Domain Level</label>
                <div>{sentence.domain_level}</div>
            </div>

            <div className='row'>
                <label>Grammar Level</label>
                <div>{sentence.grammar_level}</div>
            </div>
        </div>
}
