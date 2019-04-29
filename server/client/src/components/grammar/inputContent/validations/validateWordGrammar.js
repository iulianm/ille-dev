export default (wordGrammar, wordGrammarErrors, wordGrammarsArrayErrors, wordGrammarIndex) => {

    if (!wordGrammar || !wordGrammar.grammatical_function) {
        wordGrammarErrors.grammatical_function = 'Grammatical Function of a Word is required';
        wordGrammarsArrayErrors[wordGrammarIndex] = wordGrammarErrors;
    }
    if (!wordGrammar || !wordGrammar.sentence_position) {
        wordGrammarErrors.sentence_position = 'Sentence Position of a Word is required';
        wordGrammarsArrayErrors[wordGrammarIndex] = wordGrammarErrors;
    }
    if (!wordGrammar || !wordGrammar.sentence_function) {
        wordGrammarErrors.sentence_function = 'Sentence Function of a Word is required';
        wordGrammarsArrayErrors[wordGrammarIndex] = wordGrammarErrors;
    }
    if (!wordGrammar || !wordGrammar.phrase_position) {
        wordGrammarErrors.phrase_position = 'Phrase Position of a Word is required';
        wordGrammarsArrayErrors[wordGrammarIndex] = wordGrammarErrors;
    }
    if (!wordGrammar || !wordGrammar.phrase_function) {
        wordGrammarErrors.phrase_function = 'Phrase Function of a Word is required';
        wordGrammarsArrayErrors[wordGrammarIndex] = wordGrammarErrors;
    }
    if (!wordGrammar || !wordGrammar.expression_position) {
        wordGrammarErrors.expression_position = 'Expression Position of a Word is required';
        wordGrammarsArrayErrors[wordGrammarIndex] = wordGrammarErrors;
    }
}
