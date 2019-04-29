import React, { Component } from 'react';
import { connect } from 'react-redux';
import reviewParagraph from "./review/reviewParagraph";
import reviewPhrase from "./review/reviewPhrase";
import reviewSentence from "./review/reviewSentence";
import reviewWord from "./review/reviewWord";
import reviewWordGrammar from "./review/reviewWordGrammar";
import reviewWordVocabulary from "./review/reviewWordVocabulary";
import reviewExpression from "./review/reviewExpression";
import reviewPunctuation from "./review/reviewPunctuation";
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class ParagraphFormReview extends Component {

    constructor() {
        super();
        this.saveParagraphAndComponents = this.saveParagraphAndComponents.bind(this);
        this.reviewEntireParagraph = this.reviewEntireParagraph.bind(this);
    }

    async saveParagraphAndComponents(formValues, history) {
        const res = await axios.post('/api/paragraph/new', formValues);

        console.log("The CHECK PARAGRAPH func was activated", res.data);

        history.push('/dashboard')
    }

    reviewEntireParagraph(formValues) {
        console.log('FormVALUES are', formValues)

        // <----- PARAGRAPH Review -----> //

        const reviewFieldsArray = [];
        let counter = -1;

        formValues.paragraphs.forEach((paragraph) => {

            counter++;

            reviewParagraph(paragraph, counter, reviewFieldsArray);

            // <----- PARAGRAPH -> PHRASE Valuation -----> //

            if (paragraph.phraseSubdoc) {

                paragraph.phraseSubdoc.forEach((phrase) => {

                    counter++;
                    reviewPhrase(phrase, counter, reviewFieldsArray);

                    // <----- PARAGRAPH -> PHRASE -> SENTENCE Valuation -----> //

                    if (phrase.sentenceSubdoc) {
                        phrase.sentenceSubdoc.forEach((sentence) => {

                            counter++;
                            reviewSentence(sentence, counter, reviewFieldsArray);

                            // <----- PARAGRAPH -> PHRASE -> SENTENCE -> EXPRESSION Valuation -----> //

                            if (sentence.expressionSubdoc) {
                                sentence.expressionSubdoc.forEach((expression) => {

                                    counter++;
                                    reviewExpression(expression, counter, reviewFieldsArray);
                                })
                            }

                            // <----- PARAGRAPH -> PHRASE -> SENTENCE -> WORD Valuation -----> //

                            if (sentence.wordSubdoc) {
                                sentence.wordSubdoc.forEach((word) => {
                                    counter++;
                                    reviewWord(word, counter, reviewFieldsArray);

                                    // <----- PARAGRAPH -> PHRASE -> SENTENCE -> WORD -> GRAMMAR -----> //

                                    if (word.wordGrammarSubdoc) {
                                        word.wordGrammarSubdoc.forEach((wordGrammar) => {
                                            counter++;
                                            reviewWordGrammar(wordGrammar, counter, reviewFieldsArray);
                                        })
                                    }

                                    // <----- PARAGRAPH -> PHRASE -> SENTENCE -> WORD -> VOCABULARY -----> //

                                    if (word.wordVocabularySubdoc) {
                                        word.wordVocabularySubdoc.forEach((wordVocabulary) => {
                                            counter++;
                                            reviewWordVocabulary(wordVocabulary, counter, reviewFieldsArray);
                                        })
                                    }

                                    // <----- PARAGRAPH -> PHRASE -> SENTENCE -> WORD -> PUNCTUATION -----> //

                                    if (word.punctuationSubdoc) {
                                        word.punctuationSubdoc.forEach((punctuation) => {

                                            counter++;
                                            reviewPunctuation('word', punctuation, counter, reviewFieldsArray);

                                        })
                                    }

                                })
                            }

                            // <----- PARAGRAPH -> PHRASE -> SENTENCE -> PUNCTUATION Valuation -----> //

                            if (sentence.punctuationSubdoc) {
                                sentence.punctuationSubdoc.forEach((punctuation) => {

                                    counter++;
                                    reviewPunctuation('sentence', punctuation, counter, reviewFieldsArray);

                                })
                            }
                        })
                    }

                    // <----- PARAGRAPH -> PHRASE -> PUNCTUATION Valuation -----> //

                    if (phrase.punctuationSubdoc) {
                        phrase.punctuationSubdoc.forEach((punctuation) => {

                            counter++;
                            reviewPunctuation('phrase', punctuation, counter, reviewFieldsArray);
                        })
                    }
                })
            }

        })
        return reviewFieldsArray;
    }

    render() {
        return (
            <div>
                <h5>Please confirm your entries</h5>
                {this.reviewEntireParagraph(this.props.formValues)}
                <button onClick={this.props.onCancel}><i className="fa fa-arrow-left">Edit</i></button>
                <button onClick={() => this.saveParagraphAndComponents(this.props.formValues, this.props.history)}><i className="fa fa-check">Save Paragraph</i></button>
            </div >
        );
    }
}


function mapStateToProps(state) {
    return { formValues: state.form.paragraphForm.values };
}

//withRouter() -> this way the component knowa about the 'history' object that is provided by React-Router; history is passed into the component by the props object
export default connect(mapStateToProps)(withRouter(ParagraphFormReview));