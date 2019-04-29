import React, { Component } from 'react';
import Sentence from './Sentence';
import ConnectorWord from './ConnectorWord';
import ConnectorPunctuation from './ConnectorPunctuation';

class SentenceList extends Component {

    renderSentence() {
        if (this.props.isPhraseSplit) {

            const { phrase } = this.props;
            const sentences = phrase.sentenceSubdoc;
            const connectors = phrase.connectorPhraseSubdoc;
            const connectorsSentences = sentences.concat(connectors);

            connectorsSentences.sort((a, b) => a.phrase_position - b.phrase_position);

            return connectorsSentences.map(connectorSentence => {
                if (connectorSentence.domain) {

                    return (
                        <Sentence
                            key={connectorsSentences.indexOf(connectorSentence)}
                            id={`s${connectorsSentences.indexOf(connectorSentence) + 1}`}
                            sentence={connectorSentence}
                            phraseId={this.props.phraseId}
                            wordListPortal={this.props.wordListPortal}
                        >
                        </Sentence>
                    )
                } else {
                    if (connectorSentence.type === 'punctuation') {
                        return (
                            <ConnectorPunctuation
                                key={connectorsSentences.indexOf(connectorSentence)}
                                content={connectorSentence.content}
                            >
                            </ConnectorPunctuation>
                        )
                    } else {
                        return (
                            <ConnectorWord
                                key={connectorsSentences.indexOf(connectorSentence)}
                                content={connectorSentence.content}
                            >
                            </ConnectorWord>
                        )
                    }
                }
            })
        } else {
            return;
        }
    }

    render() {
        return (
            <div className='list-sentence'>
                {this.renderSentence()}
            </div>
        );
    };
};

export default SentenceList;
