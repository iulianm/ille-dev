import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <div><h3>ILLE - Integrated Language Learning Environment</h3></div>
                );
            default:
                return (
                    <ul className='main-nav'>
                        <li>
                            <a href='#'>Vocabulary</a>
                        </li>
                        <li>
                            <a href='#'>Grammar</a>
                        </li>
                    </ul>
                );
        }
    }

    render() {
        console.log(this.props);
        return (
            <nav className='footer'>
                {this.renderContent()}
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Footer);
