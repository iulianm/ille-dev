import React, { Component } from 'react';
import LocalLoginForm from './LocalLoginForm';
import LocalSignupForm from './LocalSignupForm';
import { connect } from 'react-redux';

class ConnectUnlinkButtons extends Component {
    constructor() {
        super();
        this.state = {
            loginFormIsHidden: true,
            signupFormIsHidden: true
        };

        this.toggleLoginForm = this.toggleLoginForm.bind(this);
        this.toggleSignupForm = this.toggleSignupForm.bind(this);
    }

    toggleLoginForm() {
        this.setState({ loginFormIsHidden: !this.state.loginFormIsHidden });
        if (this.state.signupFormIsHidden === false)
            this.setState({ signupFormIsHidden: true });
    }

    toggleSignupForm() {
        this.setState({ signupFormIsHidden: !this.state.signupFormIsHidden });
        if (this.state.loginFormIsHidden === false)
            this.setState({ loginFormIsHidden: true });
    }


    renderContent() {
        // if (this.props.auth.local.password !== '' && this.props.auth.google.token !== '') {
        if (this.props.auth.local && this.props.auth.google) {
            return (
                <div>
                    <a href='/auth/unlink/local' class='btn btn-ghost'>Unlink Local Account</a>
                    <a href='/auth/unlink/google' class='btn btn-ghost'><span className='fa fa-google-plus'></span> Unlink Google Account</a>
                </div >
            )
            //} else if (this.props.auth.local.password !== '' && this.props.auth.google.token === '') {
        } else if (this.props.auth.local) {
            return (
                <div>
                    <a href='/auth/unlink/local' class='btn btn-ghost'>Unlink Local Account</a>
                    <a href='/auth/connect/google' class='btn btn-ghost'><span className='fa fa-google-plus'></span> Connect Google</a>
                </div>
            )
        } else {
            return (
                <div>
                    <a href='/auth/connect/local' class='btn btn-ghost' onClick={this.toggleLoginForm} >Connect Local</a>
                    <a href='/auth/unlink/google' class='btn btn-ghost'><span className='fa fa-google-plus'></span> Unlink Google Account</a>
                </div>
            )
        }
    }

    render() {
        const isLoginFormHidden = this.state.loginFormIsHidden;
        const isSignupFormHidden = this.state.signupFormIsHidden;
        let localLoginForm;

        if (!isLoginFormHidden) {
            localLoginForm = <LocalLoginForm />;
        }

        if (!isSignupFormHidden) {
            localLoginForm = <LocalSignupForm />;
        }

        return (
            <div>
                {this.renderContent()}<br></br>
                {localLoginForm}
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(ConnectUnlinkButtons);