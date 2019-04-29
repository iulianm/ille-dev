import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Phrase from './Phrase';

class PhraseList extends Component {

    componentWillMount() {
        this.props.fetchPhrases();
    }

    renderPhrase() {
        if (this.props.phrases) {

            const { phrases } = this.props;

            return phrases.map(phrase => {
                return (
                    <Phrase
                        key={phrases.indexOf(phrase)}
                        id={`p${phrases.indexOf(phrase) + 1}`}
                        phrase={phrase}
                    >
                    </Phrase>
                )
            })
        } else {
            return;
        }
    }

    render() {
        return (
            <div className='list-phrase'>
                {this.renderPhrase()}
            </div>
        );
    };
};

function mapStateToProps({ phrases }) {
    return { phrases };
}

export default connect(mapStateToProps, actions)(PhraseList);
