import React from 'react';

const LocalSignupForm = () => {
    return (
        <div className='local-strategy-form-box'>
            <div className='row'>
                <form action='/auth/local-signup' method='post' className='signup-form'>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label>First Name</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <input type='text' name='firstName' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label>Last Name</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <input type='text' name='lastName' />
                        </div>
                    </div>
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
                            <label>Location</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <input type='text' name='location' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label>German Language Level</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <select name='languageLevel'>
                                <option value='Zero' selected>Zero</option>
                                <option value='Beginner'>Beginner</option>
                                <option value='Medium'>Medium</option>
                                <option value='Fluent'>Fluent</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label>Vocabulary of Interest</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <select name='vocabularyOfInterest'>
                                <option value='Economics' selected>Economics</option>
                                <option value='Finance-Banking'>Finance-Banking</option>
                                <option value='Information Technology'>Information Technology</option>
                                <option value='Gastronomy'>Gastronomy</option>
                                <option value='Body Parts'>Body Parts</option>
                                <option value='Transportation'>Transportation</option>
                            </select>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col span-1-of-3'>
                            <label>&nbsp;</label>
                        </div>
                        <div className='col span-2-of-3'>
                            <input type='submit' value='Sign Up' />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default LocalSignupForm;