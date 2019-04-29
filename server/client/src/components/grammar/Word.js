import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import drawSVG from '../../services/drawSVG';

class Word extends Component {


    componentDidMount() {

        if (document.getElementById('w1') !== null
            && document.getElementById('w3') !== null) {

            drawSVG.connectDivs('w1', 'w3', 'green');
            drawSVG.createTriangleMarker();
            window.addEventListener("resize", this.updateDimensions);
        }
    }

    updateDimensions() {
        var svg = document.getElementById('canvas_w1_w3');
        svg.parentNode.removeChild(svg);

        drawSVG.connectDivs('w1', 'w3', 'green');
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            ReactDOM.createPortal(
                <div
                    className='row-grammar row-word'
                    id={this.props.id}
                >
                    {this.props.word.content}
                </div>,
                document.getElementById(this.props.wordPortal))
        );
    };
};

export default Word;
