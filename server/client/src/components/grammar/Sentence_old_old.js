import React, { Component } from 'react';
import WordList from './WordList';
import Punctuation from './Punctuation';

class Sentence extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSentenceSplit: false,
        };

        // This binding is necessary to make `this` work in the callback
        this.splitSentence = this.splitSentence.bind(this);
    }

    splitSentence() {
        this.setState(prevState => ({
            isSentenceSplit: !prevState.isSentenceSplit
        }));
        console.log('Smb split the Sentence');
    }

    getWordsPunctuation() {
        if (this.state.isSentenceSplit) {
            console.log('Sentence split is: ', this.state.isSentenceSplit);

            const sentence = this.props.sentence;

            const words = sentence.wordSubdoc;
            const punctuations = sentence.punctuationSubdoc;
            const wordsPunctuations = words.concat(punctuations);

            wordsPunctuations.sort((a, b) => a.sentence_position - b.sentence_position);

            return wordsPunctuations.map(wordPunctuation => {
                return (
                    <div>
                        {wordPunctuation.domain ?
                            <WordList word={wordPunctuation} /> :
                            <Punctuation punctuation={wordPunctuation} />}
                    </div>
                )
            });
        }
    }

    render() {
        return (
            <div className='row-grammar sentence'>
                <div onClick={this.splitSentence}>{this.props.sentence.content}</div>
                <div>{this.getWordsPunctuation()}</div>
            </div>
        );
    };
};

export default Sentence;
