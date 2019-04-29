import React, { Component } from 'react';
import { getFormValues } from 'redux-form';
import { connect } from "react-redux";
import axios from 'axios';

class PhraseContentInput extends Component {

    constructor() {
        super();
        this.state = { phraseContentAlreadyExists: null };
        this.checkPhraseContent = this.checkPhraseContent.bind(this);
    }

    async checkPhraseContent(phraseContent) {
        const res = await axios.get('/api/check/phrase/content', {
            params: { content: phraseContent }
        });
        console.log("The CHECK PHRASE func was activated", res.data);
        if (res.data === '') {
            this.setState({ phraseContentAlreadyExists: false });
        } else {
            this.setState({ phraseContentAlreadyExists: true });
        }
    }

    showMessageAfterCheck() {
        if (this.state.phraseContentAlreadyExists === true) {
            return (
                <div>
                    <div>This Phrase already exists in the DB.</div>
                    <div>Please introduce a new one!</div>
                </div>
            )
        } else if (this.state.phraseContentAlreadyExists === false) {
            return (
                <div>
                    <div>This Phrase does not exists in the DB.</div>
                    <div>Please procede further and introduce all the details!</div>
                </div>
            )
        } else if (this.state.phraseContentAlreadyExists === null) {
            return (
                <div></div>)
        }
    }

    render() {
        const { paragraphDepth, phraseDepth, input, label, name, type, meta: { touched, error } } = this.props
        return (
            <div className='row'>
                <div className='col span-1-of-3'>
                    <label>{label}</label>
                    <div>PARA L: {paragraphDepth} -> PHRASE L: {phraseDepth}</div>
                </div>
                <div className='col span-2-of-3'>
                    {touched && error && <span>{error}</span>}
                    <textarea {...input} name={name} type={type} />
                    {this.showMessageAfterCheck()}
                </div>
                <button type="button" onClick={() => this.checkPhraseContent(this.props.values.paragraphs[paragraphDepth].phraseSubdoc[phraseDepth].content)}>CHECK Content</button>
            </div>
        )
    }
}

PhraseContentInput = connect(
    state => ({
        values: getFormValues('paragraphForm')(state)
    })
)(PhraseContentInput)

export default PhraseContentInput;