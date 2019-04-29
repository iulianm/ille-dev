import React, { Component } from 'react';
import SentenceList from './SentenceList';


class Phrase extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isPhraseSplit: false,
        };

        // This binding is necessary to make `this` work in the callback
        this.splitPhrase = this.splitPhrase.bind(this);
    }

    splitPhrase() {
        this.setState(prevState => ({
            isPhraseSplit: !prevState.isPhraseSplit
        }));
    }

    renderPhrase() {
        return (
            <div
                id={this.props.id}
                className='row-grammar'
                onClick={this.splitPhrase}
            >
                {this.props.phrase.content}
            </div>
        )
    }

    renderSentenceList() {
        if (this.state.isPhraseSplit) {
            return (
                <SentenceList
                    phrase={this.props.phrase}
                    isPhraseSplit={this.state.isPhraseSplit}
                    phraseId={this.props.id}
                    wordListPortal={`${this.props.id}_list-word`}
                />
            )
        } else {
            return;
        }
    }

    render() {
        return (
            <div className='section-phrase'>
                {this.renderPhrase()}
                {this.renderSentenceList()}
                {/* this is the div target where the Portals for sentences-split-in-words will be placed */}
                <div id={`${this.props.id}_list-word`}></div>
            </div >
        );
    }
}

export default Phrase;
