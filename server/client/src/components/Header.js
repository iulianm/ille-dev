import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

    renderContent() {

        const { auth } = this.props;

        switch (auth) {
            case null:
                return;
            case false:
                return;
            //     return
            // (
            //     <ul className='clearfix'>
            //         <li>
            //             <a href='/auth/local'>Login</a>
            //         </li>
            //         <li>
            //             <a href='/auth/google'>Login with Google</a>
            //         </li>
            //     </ul>
            // );
            default:
                const authKeys = Object.keys(this.props.auth);
                return (
                    <div>
                        <ul className='menu-area'>
                            <li>
                                <Link to="/dashboard"><i className="fas fa-chalkboard"></i></Link>
                            </li>
                            <li>
                                <Link to='/vocabulary'>Vocabulary</Link>
                            </li>
                            <li>
                                <Link to='/grammar'>Grammar</Link>
                            </li>
                            <li>
                                <Link to='/challange'>Challenge</Link>
                            </li>
                            <li>
                                <Link to='/paragraph/new'>Create</Link>
                            </li>
                        </ul>
                        <ul className='user-area clearfix'>
                            <li>
                                <Link to="/profile">Welcome, {authKeys[0] == 'google'
                                    ? auth.google.firstName
                                    : auth.local.firstName}
                                </Link>
                            </li>
                            <li>
                                <a href='/api/logout'><i className="fas fa-sign-out-alt"></i>Logout</a>
                            </li>
                        </ul>
                    </div>
                );
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className='header'>
                <nav className='main-nav clearfix'>
                    {this.renderContent()}
                </nav>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
