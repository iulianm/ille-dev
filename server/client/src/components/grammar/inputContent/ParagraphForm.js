import React, { Component } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import renderParagraph from "./rendering/renderParagraph";
import validate from "./validations/validate";
import warn from "./validations/warn";

class ParagraphForm extends Component {
  render() {
    const { handleSubmit, invalid, pristine, reset, submitting } = this.props;
    //console.log("in RENDER FORM - the ERRORS object is ---> ", this.props.errors);
    return (
      //<form onSubmit={handleSubmit(values => console.log(values))}>
      <form onSubmit={handleSubmit(this.props.onParagraphFormSubmit)}>
        <FieldArray name="paragraphs" component={renderParagraph} />
        <div>
          {/* <Link to='paragraph/new'>Cancel</Link> */}
          <button type="submit"><i className="fa fa-arrow-right">Review</i></button>
          <button type="button" onClick={reset}><i className="fa fa-times">Clear Values</i></button>
        </div>
      </form>
    );
  }
}

ParagraphForm = reduxForm({
  validate,
  warn,
  //    enableReinitialize: true,
  // initialValues: {
  //     paragraph.content : checkParagraphContent.content
  // },
  form: "paragraphForm",
  destroyOnUnmount: false // whenever we toggle between ParagraphForm and ParagraphFormReview we do not clear the form's values
})(ParagraphForm);

// You have to connect() to any reducers that you wish to connect to yourself
// ParagraphForm = connect(
//     state => ({
//         initialValues: state.checkParagraphContent // pull initial values from account reducer
//     })
//     // { load: loadAccount }               // bind account loading action creator
// )(ParagraphForm)

export default ParagraphForm;

// function mapStateToProps({checkParagraphContent}) {
//     // if (checkParagraphContent) {
//     //     return {
//     //         initialValues: {
//     //             'paragraph.content': checkParagraphContent.content
//     //         }
//     //     }
//     // }
//     return { checkParagraphContent };
// }

// export default connect(mapStateToProps)(ParagraphForm);
