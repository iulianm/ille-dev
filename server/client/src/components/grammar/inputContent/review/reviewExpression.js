import React from 'react';

export default (expression, counter, reviewFieldsArray) => {

    reviewFieldsArray[counter] =

        <div key={counter} className='expression-new-form-box'>
            <div className='row'>
                <label>Expression Content</label>
                <div>{expression.content}</div>
            </div>
            <div className='row'>
                <label>No. of Words</label>
                <div>{expression.no_words}</div>
            </div>

            <div className='row'>
                <label>Domain</label>
                <div>{expression.domain}</div>
            </div>

            <div className='row'>
                <label>Domain Level</label>
                <div>{expression.domain_level}</div>
            </div>

            <div className='row'>
                <label>Grammar Level</label>
                <div>{expression.grammar_level}</div>
            </div>
        </div>
}