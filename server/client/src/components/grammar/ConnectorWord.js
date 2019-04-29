import React, { Component } from 'react';

class ConnectorWord extends Component {

    render() {
        return (
            <div className='connector connector-word'>
                {this.props.content}
            </div>
        );
    };
};

export default ConnectorWord;