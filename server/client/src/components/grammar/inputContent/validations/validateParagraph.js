export default (paragraph, paragraphErrors, paragraphsArrayErrors, paragraphIndex) => {

    if (!paragraph.content) {
        paragraphErrors.content = 'Paragraph content is required';
        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
    }
    if (!paragraph.no_phrases && paragraph.no_phrases !== 0) {
        paragraphErrors.no_phrases = 'Number of Phrases in a Paragraph is required';
        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
    } else if (paragraph.no_phrases < 2) {
        paragraphErrors.no_phrases = 'A Paragraph must have at least two Phrases';
        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
    }
    if (!paragraph.no_sentences && paragraph.no_sentences !== 0) {
        paragraphErrors.no_sentences = 'Number of Sentences in a Paragraph is required';
        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
    } else if (paragraph.no_sentences < 4) {
        paragraphErrors.no_sentences = 'A Paragraph must have at least four Sentences';
        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
    }
    if (!paragraph.no_words && paragraph.no_words !== 0) {
        paragraphErrors.no_words = 'Number of Words in a Paragraph is required';
        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
    } else if (Number(paragraph.no_words) < 8) {
        paragraphErrors.no_words = 'A Paragraph must have at least eight Words but generally much more are needed!';
        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
    }
    if (!paragraph.no_expressions && paragraph.no_expressions !== 0) {
        paragraphErrors.no_expressions = 'Number of Expressions in a Paragraph is required';
        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
    } else if (paragraph.no_words && (Number(paragraph.no_expressions) > Number(paragraph.no_words))) {
        paragraphErrors.no_expressions = 'There cannot be more Expressions than number of Words in a Paragraph';
        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
    }
    if (!paragraph.domain) {
        paragraphErrors.domain = 'Domain of a Paragraph is required';
        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
    }
    if (!paragraph.level) {
        paragraphErrors.level = 'Level of a Paragraph is required';
        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
    }
}