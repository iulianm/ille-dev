export default (phrase, phraseErrors, phrasesArrayErrors, phraseIndex) => {

    if (!phrase || !phrase.content) {
        phraseErrors.content = 'Phrase content is required';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    }
    if (!phrase || !phrase.no_sentences && phrase.no_sentences !== 0) {
        phraseErrors.no_sentences = 'Number of Sentences in a Phrase is required';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    } else if (phrase.no_sentences < 2) {
        phraseErrors.no_sentences = 'A Phrase must have at least two Sentences';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    }
    if (!phrase || !phrase.no_connectors && phrase.no_connectors !== 0) {
        phraseErrors.no_connectors = 'Number of Connectors in a Phrase is required';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    }
    if (!phrase || !phrase.no_words && phrase.no_words !== 0) {
        phraseErrors.no_words = 'Number of Words in a Phrase is required';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    } else if (phrase.no_words < 2) {
        phraseErrors.no_words = 'A Phrase must have at least four Words';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    }
    if (!phrase || !phrase.no_expressions && phrase.no_expressions !== 0) {
        phraseErrors.no_expressions = 'Number of Expressions in a Phrase is required';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    } else if (phrase.no_words && (Number(phrase.no_expressions) > Number(phrase.no_words))) {
        phraseErrors.no_expressions = 'There cannot be more Expressions than number of Words in a Phrase';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    }
    if (!phrase || !phrase.no_punctuations && phrase.no_punctuations !== 0) {
        phraseErrors.no_punctuations = 'Number of Punctuations in a Phrase is required';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    }
    if (!phrase || !phrase.paragraph_position && phrase.paragraph_position !== 0) {
        phraseErrors.paragraph_position = 'Position of a Phrase in a Paragraph is required';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    } else if (phrase.paragraph_position === 0) {
        phraseErrors.paragraph_position = 'Position of a Phrase in a Paragraph cannot be zero';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    }
    if (!phrase || !phrase.domain) {
        phraseErrors.domain = 'Domain of a Phrase is required';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    }
    if (!phrase || !phrase.level) {
        phraseErrors.level = 'Level of a Phrase is required';
        phrasesArrayErrors[phraseIndex] = phraseErrors;
    }
}
