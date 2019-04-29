import React, { Component } from 'react';

class ConnectorPunctuation extends Component {

    render() {
        return (
            <div className='connector'>
                {this.props.content}
                <div className='connector-dot'></div>
            </div>
        );
    };
};

export default ConnectorPunctuation;
