// ParagraphNew shows ParagraphNew and ParagraphFormReview
import React, { Component } from 'react';
import { reduxForm } from "redux-form";
import ParagraphForm from './ParagraphForm';
import ParagraphFormReview from './ParagraphFormReview';

class ParagraphNew extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {new: true};
    // }

    // this is a short way of creating component-level-state -> because we use create-react-app utility that has a babel plugin that helps writing this short version of state
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return (
                <ParagraphFormReview
                    onCancel={() => this.setState({ showFormReview: false })}
                />
            )
        }
        return (
            <ParagraphForm
                onParagraphFormSubmit={() => this.setState({ showFormReview: true })}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'paragraphForm' // the option destroyOnUnmount is by default set to true -> whenever we navigate from the ParagraphNew, we cler the data. This is the opposite from ParagraphForm behavior
})(ParagraphNew);