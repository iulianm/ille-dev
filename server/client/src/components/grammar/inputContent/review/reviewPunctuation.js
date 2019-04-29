import React from 'react';

export default (parent, punctuation, counter, reviewFieldsArray) => {

    reviewFieldsArray[counter] =

        <div key={counter} className='punctuation-new-form-box'>
            <div className='row'>
                <label>Punctuation
                    {
                        parent === 'sentence' ? ' Sentence '
                            : parent === 'phrase' ? ' Phrase '
                                : parent === 'word' ? ' Word ' : ''
                    }
                    Content</label>
                <div>{punctuation.content}</div>
            </div>

            <div className='row'>
                <label>Phrase Position</label>
                <div>{punctuation.phrase_position}</div>
            </div>

            <div className='row'>
                <label>Phrase Function</label>
                <div>{punctuation.phrase_function}</div>
            </div>

            <div className='row'>
                <label>Sentence Position</label>
                <div>{punctuation.sentence_position}</div>
            </div>

            <div className='row'>
                <label>Sentence Function</label>
                <div>{punctuation.sentence_function}</div>
            </div>

            <div className='row'>
                <label>Expression Position</label>
                <div>{punctuation.expression_position}</div>
            </div>

            <div className='row'>
                <label>Expression Function</label>
                <div>{punctuation.expression_function}</div>
            </div>

            <div className='row'>
                <label>Word Position</label>
                <div>{punctuation.word_position}</div>
            </div>

            <div className='row'>
                <label>Word Function</label>
                <div>{punctuation.word_function}</div>
            </div>
        </div>
}