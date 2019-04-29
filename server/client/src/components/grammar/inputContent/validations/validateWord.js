export default (word, wordErrors, wordsArrayErrors, wordIndex) => {

    if (!word || !word.content) {
        wordErrors.content = 'Word content is required';
        wordsArrayErrors[wordIndex] = wordErrors;
    }
    if (!word || !word.domain) {
        wordErrors.domain = 'Domain of a Word is required';
        wordsArrayErrors[wordIndex] = wordErrors;
    }
    if (!word || !word.level) {
        wordErrors.level = 'Level of a Word is required';
        wordsArrayErrors[wordIndex] = wordErrors;
    }
}
