import React, { Component } from 'react';
import LocalLoginForm from './LocalLoginForm';
import LocalSignupForm from './LocalSignupForm';
import { connect } from 'react-redux';

class Landing extends Component {

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

    render() {

        // programmaticaly redirect to Dashboard when the user is actually logged in and tries to get to landing page
        if (this.props.auth) {
            this.props.history.push('/dashboard');
        }

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


            <div className='landing-page'>
                <div className='landing-text span-2-of-2'>
                    <h1>
                        <span className='heading-main'>ILLE</span>
                        <span className='heading-sub'>World’s first Integrated Language Learning Environment</span>
                    </h1>
                </div>
                <div className='landing-box clearfix'>
                    <div className='landing-box-buttons span-1-of-2'>
                        <a className='btn btn-ghost login-local' href='#' onClick={this.toggleLoginForm}>Log In</a>
                        <a className='btn btn-ghost signup-local' href='#' onClick={this.toggleSignupForm}>Sign Up</a>
                        <a className='btn btn-ghost signin-google' href='/auth/google'>
                            <i className="fab fa-google"></i>
                            Sign in with Google</a>
                    </div>
                    <div className='landing-box-login span-1-of-2'>
                        {localLoginForm}
                    </div>
                </div>
            </div>
        );
    };
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Landing);

