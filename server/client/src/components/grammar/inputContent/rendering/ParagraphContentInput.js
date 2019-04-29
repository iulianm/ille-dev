import React, { Component } from 'react';
import { getFormValues } from 'redux-form';
import { connect } from "react-redux";
import axios from 'axios';

class ParagraphContentInput extends Component {

    constructor() {
        super();
        this.state = { paragraphContentAlreadyExists: null };
        this.checkParagraphContent = this.checkParagraphContent.bind(this);
    }

    async checkParagraphContent(paragraphContent) {
        const res = await axios.get('/api/check/paragraph/content', {
            params: { content: paragraphContent }
        });
        console.log("The CHECK PARAGRAPH func was activated", res.data);
        if (res.data === '') {
            this.setState({ paragraphContentAlreadyExists: false });
        } else {
            this.setState({ paragraphContentAlreadyExists: true });
        }
    }

    showMessageAfterCheck() {
        if (this.state.paragraphContentAlreadyExists === true) {
            return (
                <div>
                    <div>This Paragraph already exists in the DB.</div>
                    <div>Please introduce a new one!</div>
                </div>
            )
        } else if (this.state.paragraphContentAlreadyExists === false) {
            return (
                <div>
                    <div>This Paragraph does not exists in the DB.</div>
                    <div>Please procede further and introduce all the details!</div>
                </div>
            )
        } else if (this.state.paragraphContentAlreadyExists === null) {
            return (
                <div></div>)
        }
    }

    render() {
        const { paragraphDepth, input, label, name, type, meta: { touched, error } } = this.props
        return (
            <div className='row'>
                <div className='col span-1-of-3'>
                    <label>{label}</label>
                    <div>PARA L: {paragraphDepth}</div>
                </div>
                <div className='col span-2-of-3'>
                    {touched && error && <span>{error}</span>}
                    <textarea {...input} name={name} type={type} />
                    {this.showMessageAfterCheck()}
                </div>
                <button type="button" onClick={() => this.checkParagraphContent(this.props.values.paragraphs[paragraphDepth].content)}>CHECK Content</button>
            </div>
        )
    }
}

ParagraphContentInput = connect(
    state => ({
        values: getFormValues('paragraphForm')(state)
    })
)(ParagraphContentInput)

export default ParagraphContentInput;