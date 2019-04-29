import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConnectUnlinkButtons from './ConnectUnlinkButtons';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Profile extends Component {

    isUserAuth() {
        const data = JSON.parse(localStorage.getItem('userAuth'));
        return data;
        // console.log('LOCAL STORAGE -- the USER is Auth? -->>', data);
        // return this.props.auth;
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                console.log('AUTH is FALSE in PROFILE');
                return;

            default:
                console.log('PROFILE -> CASE DEFAULT!', this.props.auth);
                var user;
                if (this.props.auth.local && this.props.auth.google) {
                    if (this.props.auth.local.password !== '' && this.props.auth.google.token !== '') {
                        user = this.props.auth.local;
                        console.log('The USER is a BI-ACCOUNT');
                    }
                    if (this.props.auth.local.password !== '' && this.props.auth.google.token === '') {
                        user = this.props.auth.local;
                        console.log('The USER is a LOCAL -> BUT he previously UNLINKED a GOOGLE account');
                    }
                    if (this.props.auth.local.password === '' && this.props.auth.google.token !== '') {
                        user = this.props.auth.google;
                        console.log('The USER is a GOOGLE -> BUT he previously UNLINKED a LOCAL account');
                    }

                } else {
                    if (this.props.auth.local && this.props.auth.local.password !== '') {
                        user = this.props.auth.local;
                        console.log('The USER is a LOCAL -> has NO GOOGLE, not even before');
                    } else if (this.props.auth.local) {
                        console.log('The LOCAL USER has NO PASS and NO GOOG');
                        this.props.logoutUser();
                        return;
                    } else if (this.props.auth.google && this.props.auth.google.token !== '') {
                        user = this.props.auth.google;
                        console.log('The USER is a GOOGLE -> has NO LOCAL, not even before');
                    } else {
                        if (this.props.auth.google)
                            console.log('The GOOG USER has NO TOKEN and NO LOCAL');
                        this.props.logoutUser();
                        return;
                    }
                }
        }

        console.log('Just before the return in PROFILE component');
        return (
            <section>
                <div className='row'>
                    <h2>Welcome, {user.firstName} </h2>
                    <p className='long-copy'>
                        This is your profile. Here you can edit your details if you want to. Please also select your areas of interest when studying German.
                                </p>
                </div>
                <i className='fa fa-user icon-big'></i>
                <div className='profile-box'>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label for='name'>First Name</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <span>{user.firstName}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label for='name'>Last Name</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <span>{user.lastName}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label for='name'>Location</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <span>{user.location}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label for='name'>German Language Level</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <span>{user.languageLevel}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label for='name'>Vocabulary of Interest</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <span>{user.vocabularyOfInterest}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label for='name'>Google Account Linked</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <span>{this.props.auth.google ? 'Yes' : 'No'}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label for='name'>Local Account Linked</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <span>{this.props.auth.local ? 'Yes' : 'No'}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <ConnectUnlinkButtons /><br></br>
                    <nav>
                        <div>
                            <a href='#' class='btn btn-ghost'><Link to={this.props.auth ? '/dashboard' : '/'}>Dashboard</Link></a>

                            <ul>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>

        );
    }

    render() {
        console.log('PROFILE was called in APP');
        return (
            <div>{this.renderContent()}</div>
        );
    };
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions, null, { pure: false })(Profile);