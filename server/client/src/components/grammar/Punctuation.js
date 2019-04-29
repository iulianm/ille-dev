import React, { Component } from 'react';

class Punctuation extends Component {

    render() {
        return (
            <div>{this.props.punctuation.content}</div>
        );
    };
};

export default Punctuation;
