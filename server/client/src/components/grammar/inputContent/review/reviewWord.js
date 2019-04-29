import React from 'react';

export default (word, counter, reviewFieldsArray) => {

    reviewFieldsArray[counter] =

        <div key={counter} className='word-new-form-box'>
            <div className='row'>
                <label>Word Content</label>
                <div>{word.content}</div>
            </div>
            <div className='row'>
                <label>Phrase Position</label>
                <div>{word.phrase_position}</div>
            </div>

            <div className='row'>
                <label>Phrase Function</label>
                <div>{word.phrase_function}</div>
            </div>

            <div className='row'>
                <label>Sentence Position</label>
                <div>{word.sentence_position}</div>
            </div>

            <div className='row'>
                <label>Sentence Function</label>
                <div>{word.sentence_function}</div>
            </div>

            <div className='row'>
                <label>Grammatical Function</label>
                <div>{word.grammatical_function}</div>
            </div>

            <div className='row'>
                <label>Expression Position</label>
                <div>{word.expression_position}</div>
            </div>

            <div className='row'>
                <label>Domain</label>
                <div>{word.domain}</div>
            </div>

            <div className='row'>
                <label>Domain Level</label>
                <div>{word.domain_level}</div>
            </div>

            <div className='row'>
                <label>Grammar Level</label>
                <div>{word.grammar_level}</div>
            </div>
        </div>
}
