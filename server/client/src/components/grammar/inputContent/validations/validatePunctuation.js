export default (punctuation, punctuationErrors, punctuationsArrayErrors, punctuationIndex) => {
    if (!punctuation || !punctuation.content) {
        punctuationErrors.content = 'Punctuation content is required';
        punctuationsArrayErrors[punctuationIndex] = punctuationErrors;
    }
    if (!punctuation || !punctuation.phrase_position && punctuation.phrase_position !== 0) {
        punctuationErrors.phrase_position = 'Position of a Punctuation in a Phrase is required';
        punctuationsArrayErrors[punctuationIndex] = punctuationErrors;
    } else if (punctuation.phrase_position === 0) {
        punctuationErrors.phrase_position = 'Position of a Punctuation in a Phrase cannot be zero';
        punctuationsArrayErrors[punctuationIndex] = punctuationErrors;
    }
    if (!punctuation || !punctuation.phrase_function) {
        punctuationErrors.phrase_function = 'Function of a Punctuation in a Phrase is required';
        punctuationsArrayErrors[punctuationIndex] = punctuationErrors;
    }
    if (!punctuation || !punctuation.sentence_position && punctuation.sentence_position !== 0) {
        punctuationErrors.sentence_position = 'Position of a Punctuation in a Sentence is required';
        punctuationsArrayErrors[punctuationIndex] = punctuationErrors;
    } else if (punctuation.sentence_position === 0) {
        punctuationErrors.sentence_position = 'Position of a Punctuation in a Sentence cannot be zero';
        punctuationsArrayErrors[punctuationIndex] = punctuationErrors;
    }
    if (!punctuation || !punctuation.sentence_function) {
        punctuationErrors.sentence_function = 'Function of a Punctuation in a Sentence is required';
        punctuationsArrayErrors[punctuationIndex] = punctuationErrors;
    }
    if (!punctuation || !punctuation.word_position && punctuation.word_position !== 0) {
        punctuationErrors.word_position = 'Position of a Punctuation in a Word is required';
        punctuationsArrayErrors[punctuationIndex] = punctuationErrors;
    } else if (punctuation.word_position === 0) {
        punctuationErrors.word_position = 'Position of a Punctuation in a Word cannot be zero';
        punctuationsArrayErrors[punctuationIndex] = punctuationErrors;
    }
    if (!punctuation || !punctuation.word_function) {
        punctuationErrors.word_function = 'Function of a Punctuation in a Word is required';
        punctuationsArrayErrors[punctuationIndex] = punctuationErrors;
    }
}