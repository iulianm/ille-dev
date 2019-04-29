import React from 'react'

export const renderInput = ({ input, label, name, type, meta: { touched, error } }) => (
    <div className='row'>
        <div className='col span-1-of-3'>
            <label>{label}</label>
        </div>
        <div className='col span-2-of-3'>
            {touched && error && <span>{error}</span>}
            <input {...input} name={name} type={type} />
        </div>
    </div>

);

export const renderTextArea = ({ input, label, name, type, meta: { touched, error } }) => (
    <div className='row'>
        <div className='col span-1-of-3'>
            <label>{label}</label>
        </div>
        <div className='col span-2-of-3'>
            {touched && error && <span>{error}</span>}
            <textarea {...input} name={name} type={type} />
        </div>
    </div>
)

export const renderSelect = ({ input, label, name, optionsList, type, meta: { touched, error } }) => (
    <div className='row'>
        <div className='col span-1-of-3'>
            <label>{label}</label>
        </div>
        <div className='col span-2-of-3'>
            {touched && error && <span>{error}</span>}
            <select {...input} name={name} type={type} >
                {
                    optionsList.map(option =>
                        <option key={option} value={option}>{option}</option>)
                }
            </select>
        </div>
    </div>
)