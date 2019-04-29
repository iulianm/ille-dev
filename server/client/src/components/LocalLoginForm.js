import React from 'react';

const LocalLoginForm = () => {
    return (
        <div className='local-strategy-form-box'>
            <div className='row'>
                <form action='/auth/local-login' method='post' className='login-form'>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label>Email</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <input type='email' name='email' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label>Password</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <input type='password' name='password' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label>&nbsp;</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <input type='submit' value='Log In' />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default LocalLoginForm;