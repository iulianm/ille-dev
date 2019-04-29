export default (sentence, sentenceErrors, sentencesArrayErrors, sentenceIndex) => {

    if (!sentence || !sentence.content) {
        sentenceErrors.content = 'Sentence content is required';
        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
    }
    if (!sentence || !sentence.no_words && sentence.no_words !== 0) {
        sentenceErrors.no_words = 'Number of Words in a Sentence is required';
        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
    } else if (sentence.no_words < 2) {
        sentenceErrors.no_words = 'There must be at least two Words in a Sentence';
        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
    }
    if (!sentence || !sentence.no_expressions && sentence.no_expressions !== 0) {
        sentenceErrors.no_expressions = 'Number of Expressions in a Sentence is required';
        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
    } else if (sentence.no_words && (Number(sentence.no_expressions) > Number(sentence.no_words))) {
        sentenceErrors.no_expressions = 'There cannot be more Expressions than number of Words in a Sentence';
        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
    }
    if (!sentence || !sentence.no_punctuations && sentence.no_punctuations !== 0) {
        sentenceErrors.no_punctuations = 'Number of Punctuations in a Sentence is required';
        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
    } else if (sentence.no_punctuations < 1) {
        sentenceErrors.no_punctuations = 'There must be at least one Punctuation sign in a Sentence (the ending dot)';
        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
    }
    if (!sentence || !sentence.phrase_position && sentence.phrase_position !== 0) {
        sentenceErrors.phrase_position = 'Position of a Sentence in a Phrase is required';
        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
    } else if (sentence.phrase_position === 0) {
        sentenceErrors.phrase_position = 'Position of a Sentence in a Phrase cannot be zero';
        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
    }
    if (!sentence || !sentence.phrase_function) {
        sentenceErrors.phrase_function = 'Function of a Sentence in a Phrase is required';
        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
    }
    if (!sentence || !sentence.domain) {
        sentenceErrors.domain = 'Domain of a Sentence is required';
        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
    }
    if (!sentence || !sentence.level) {
        sentenceErrors.level = 'Level of a Sentence is required';
        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
    }
}
