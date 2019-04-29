import React, { Component } from 'react';
import drawSVG from '../../services/drawSVG';
import WordList from './WordList';

class Sentence extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSentenceSplit: false,
        };

        this.splitSentence = this.splitSentence.bind(this);
    }

    splitSentence() {
        this.setState(prevState => ({
            isSentenceSplit: !prevState.isSentenceSplit
        }));
    }

    componentDidMount() {

        if (document.getElementById('s1') !== null
            && document.getElementById('s4') !== null) {

            drawSVG.connectDivs('s1', 's4', 'blue');
            drawSVG.createTriangleMarker();
            window.addEventListener("resize", this.updateDimensions);
        }
    }

    updateDimensions() {
        var svg = document.getElementById('canvas_s1_s4');
        svg.parentNode.removeChild(svg);

        drawSVG.connectDivs('s1', 's4', 'blue');
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    renderSentence() {
        return (
            <div
                id={this.props.id}
                className='row-grammar'
                onClick={this.splitSentence}
            >
                {this.props.sentence.content}
            </div>
        )
    }

    renderWordList() {
        return (
            <WordList
                phraseId={this.props.phraseId}
                sentenceId={this.props.id}
                sentence={this.props.sentence}
                isSentenceSplit={this.state.isSentenceSplit}
                wordListPortal={this.props.wordListPortal}
            />
        )
    }

    render() {
        return (
            <div className='row-sentence-container'>
                {this.renderSentence()}
                {this.renderWordList()}
            </div>
        )
    }
}

export default Sentence;
