import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Word from './Word';
import ConnectorPunctuation from './ConnectorPunctuation';

class WordList extends Component {

    renderWord() {
        if (this.props.isSentenceSplit) {

            const { sentence } = this.props;
            const words = sentence.wordSubdoc;
            const connectors = sentence.connectorSentenceSubdoc;
            const connectorsWords = words.concat(connectors);

            connectorsWords.sort((a, b) => a.sentence_position - b.sentence_position);

            return connectorsWords.map(connectorWord => {
                if (connectorWord.domain) {
                    return (
                        <Word
                            key={connectorsWords.indexOf(connectorWord)}
                            id={`w${connectorsWords.indexOf(connectorWord) + 1}`}
                            word={connectorWord}
                            wordPortal={`${this.props.phraseId}_${this.props.sentenceId}_w`}
                        >
                        </Word>
                    )
                } else {
                    return (
                        <ConnectorPunctuation
                            key={connectorsWords.indexOf(connectorWord)}
                            content={connectorWord.content}
                        >
                        </ConnectorPunctuation>
                    )
                }
            })
        } else {
            return;
        }
    }

    render() {
        return (
            ReactDOM.createPortal(
                <div
                    id={`${this.props.phraseId}_${this.props.sentenceId}_w`}
                    className={this.props.isSentenceSplit ? 'sentence-list-word' : ''}
                >
                    {this.renderWord()}
                </div >,
                document.getElementById(this.props.wordListPortal))
        );

    };
};

export default WordList;
