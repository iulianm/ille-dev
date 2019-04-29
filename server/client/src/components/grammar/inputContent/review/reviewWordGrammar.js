import React from 'react';

export default (wordGrammar, counter, reviewFieldsArray) => {

    reviewFieldsArray[counter] =

        <div key={counter} className='wordGrammar-new-form-box'>
            <div className='row'>
                <label>Grammatical Function</label>
                <div>{wordGrammar.grammatical_function}</div>
            </div>
            <div className='row'>
                <label>Sentence Position</label>
                <div>{wordGrammar.sentence_position}</div>
            </div>
            <div className='row'>
                <label>Sentence Function</label>
                <div>{wordGrammar.sentence_function}</div>
            </div>
            <div className='row'>
                <label>Phrase Position</label>
                <div>{wordGrammar.phrase_position}</div>
            </div>
            <div className='row'>
                <label>Phrase Function</label>
                <div>{wordGrammar.phrase_function}</div>
            </div>
            <div className='row'>
                <label>Expression Position</label>
                <div>{wordGrammar.expression_position}</div>
            </div>
        </div>
}
