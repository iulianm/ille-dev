import React from 'react';

export default (wordVocabulary, counter, reviewFieldsArray) => {

    reviewFieldsArray[counter] =

        <div key={counter} className='wordVocabulary-new-form-box'>
            <div className='row'>
                <label>Pronunciation</label>
                <div>{wordVocabulary.pronunciation}</div>
            </div>
            <div className='row'>
                <label>Definition</label>
                <div>{wordVocabulary.definition}</div>
            </div>

            <div className='row'>
                <label>Phrase Function</label>
                <div>{wordVocabulary.phrase_function}</div>
            </div>

            <div className='row'>
                <label>Synonyms</label>
                <div>{wordVocabulary.synonyms}</div>
            </div>

            <div className='row'>
                <label>Antonyms</label>
                <div>{wordVocabulary.antonyms}</div>
            </div>

            <div className='row'>
                <label>Derived Terms</label>
                <div>{wordVocabulary.derived_terms}</div>
            </div>
        </div>
}
