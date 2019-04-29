export default (wordVocabulary, wordVocabularyErrors, wordVocabularysArrayErrors, wordVocabularyIndex) => {

    if (!wordVocabulary || !wordVocabulary.pronunciation) {
        wordVocabularyErrors.pronunciation = 'Word Pronunciation is required';
        wordVocabularysArrayErrors[wordVocabularyIndex] = wordVocabularyErrors;
    }
    if (!wordVocabulary || !wordVocabulary.definition) {
        wordVocabularyErrors.definition = 'Definition of a Word is required';
        wordVocabularysArrayErrors[wordVocabularyIndex] = wordVocabularyErrors;
    }
    if (!wordVocabulary || !wordVocabulary.synonyms) {
        wordVocabularyErrors.synonyms = 'Synonym(s) of a Word is required';
        wordVocabularysArrayErrors[wordVocabularyIndex] = wordVocabularyErrors;
    }
    if (!wordVocabulary || !wordVocabulary.antonyms) {
        wordVocabularyErrors.antonyms = 'Antonym(s) of a Word is required';
        wordVocabularysArrayErrors[wordVocabularyIndex] = wordVocabularyErrors;
    }
    if (!wordVocabulary || !wordVocabulary.derived_terms) {
        wordVocabularyErrors.derived_terms = 'Derived Term(s) of a Word is required';
        wordVocabularysArrayErrors[wordVocabularyIndex] = wordVocabularyErrors;
    }
}
