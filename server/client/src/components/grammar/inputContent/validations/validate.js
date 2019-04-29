import validateParagraph from './validateParagraph';
import validatePhrase from './validatePhrase';
import validateSentence from './validateSentence';
import validateWord from './validateWord';
import validateWordGrammar from './validateWordGrammar';
import validateWordVocabulary from './validateWordVocabulary';
import validateExpression from './validateExpression';
import validatePunctuation from './validatePunctuation';

export default values => {

    var errors = {};

    // <----- PARAGRAPH Validation -----> //

    if (!values.paragraphs || !values.paragraphs.length) {
        errors.paragraphs = { _error: 'At least one Paragraph must be entered' };
        console.log('VALUES -->', values);
    } else {
        const paragraphsArrayErrors = [];
        values.paragraphs.forEach((paragraph, paragraphIndex) => {
            console.log('Looping in PARAGRAPHS - Paragraph is --> ', paragraph, 'Paragraph Index is -->', paragraphIndex);
            const paragraphErrors = {};
            validateParagraph(paragraph, paragraphErrors, paragraphsArrayErrors, paragraphIndex);

            // <----- PARAGRAPH -> PHRASE Validation -----> //

            if (!paragraph.phraseSubdoc || !paragraph.phraseSubdoc.length) {
                paragraphErrors.phraseSubdoc = { _error: 'At least one Phrase must be entered' };
                paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                if (paragraphsArrayErrors.length) {
                    errors.paragraphs = paragraphsArrayErrors;
                }
            } else {
                const phrasesArrayErrors = [];
                paragraph.phraseSubdoc.forEach((phrase, phraseIndex) => {
                    const phraseErrors = {};
                    validatePhrase(phrase, phraseErrors, phrasesArrayErrors, phraseIndex);
                    if (phrasesArrayErrors.length) {
                        paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                        if (paragraphsArrayErrors.length) {
                            errors.paragraphs = paragraphsArrayErrors
                        }
                    }

                    // <----- PARAGRAPH -> PHRASE -> PUNCTUATION Validation -----> //

                    if (!phrase || !phrase.punctuationSubdoc || !phrase.punctuationSubdoc.length) {
                        // phraseErrors.punctuationSubdoc -> covered by a Warning in warn.js
                    } else {
                        const punctuationsArrayErrors = [];
                        phrase.punctuationSubdoc.forEach((punctuation, punctuationIndex) => {
                            const punctuationErrors = {};
                            validatePunctuation(punctuation, punctuationErrors, punctuationsArrayErrors, punctuationIndex);
                            if (punctuationsArrayErrors.length) {
                                phraseErrors.punctuationSubdoc = punctuationsArrayErrors;
                                phrasesArrayErrors[phraseIndex] = phraseErrors;
                                if (phrasesArrayErrors.length) {
                                    paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                                    paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                                    if (paragraphsArrayErrors.length) {
                                        errors.paragraphs = paragraphsArrayErrors
                                    }
                                }
                            }
                        })
                    }

                    // <----- PARAGRAPH -> PHRASE -> SENTENCE Validation -----> //

                    if (!phrase || !phrase.sentenceSubdoc || !phrase.sentenceSubdoc.length) {
                        phraseErrors.sentenceSubdoc = { _error: 'At least one Sentence must be entered' };
                        phrasesArrayErrors[phraseIndex] = phraseErrors;
                        if (phrasesArrayErrors.length) {
                            paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                            paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                            if (paragraphsArrayErrors.length) {
                                errors.paragraphs = paragraphsArrayErrors;
                            }
                        }
                    } else {
                        const sentencesArrayErrors = [];
                        phrase.sentenceSubdoc.forEach((sentence, sentenceIndex) => {
                            const sentenceErrors = {};
                            validateSentence(sentence, sentenceErrors, sentencesArrayErrors, sentenceIndex);
                            sentencesArrayErrors[sentenceIndex] = sentenceErrors;
                            if (sentencesArrayErrors.length) {
                                phraseErrors.sentenceSubdoc = sentencesArrayErrors;
                                phrasesArrayErrors[phraseIndex] = phraseErrors;
                                if (phrasesArrayErrors.length) {
                                    paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                                    paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                                    if (paragraphsArrayErrors.length) {
                                        errors.paragraphs = paragraphsArrayErrors;
                                    }
                                }
                            }

                            // <----- PARAGRAPH -> PHRASE -> SENTENCE -> EXPRESSION Validation -----> //

                            if (!sentence || !sentence.expressionSubdoc || !sentence.expressionSubdoc.length) {
                                // an Warning is already set up to cover for the existence of an Expression in a Sentence 
                            } else {
                                const expressionsArrayErrors = [];
                                sentence.expressionSubdoc.forEach((expression, expressionIndex) => {
                                    const expressionErrors = {};
                                    validateExpression(expression, expressionErrors, expressionsArrayErrors, expressionIndex);
                                    if (expressionsArrayErrors.length) {
                                        sentenceErrors.expressionSubdoc = expressionsArrayErrors;
                                        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
                                        if (sentencesArrayErrors.length) {
                                            phraseErrors.sentenceSubdoc = sentencesArrayErrors;
                                            phrasesArrayErrors[phraseIndex] = phraseErrors;
                                            if (phrasesArrayErrors.length) {
                                                paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                                                paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                                                if (paragraphsArrayErrors.length) {
                                                    errors.paragraphs = paragraphsArrayErrors
                                                }
                                            }
                                        }
                                    }
                                })
                            }

                            // <----- PARAGRAPH -> PHRASE -> SENTENCE -> WORD Validation -----> //

                            if (!sentence || !sentence.wordSubdoc || !sentence.wordSubdoc.length) {
                                sentenceErrors.wordSubdoc = { _error: 'At least one Word must be entered' };
                                sentencesArrayErrors[sentenceIndex] = sentenceErrors;
                                if (sentencesArrayErrors.length) {
                                    phraseErrors.sentenceSubdoc = sentencesArrayErrors;
                                    phrasesArrayErrors[phraseIndex] = phraseErrors;
                                    if (phrasesArrayErrors.length) {
                                        paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                                        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                                        if (paragraphsArrayErrors.length) {
                                            errors.paragraphs = paragraphsArrayErrors;
                                        }
                                    }
                                }
                            } else {
                                const wordsArrayErrors = [];
                                sentence.wordSubdoc.forEach((word, wordIndex) => {
                                    const wordErrors = {};
                                    validateWord(word, wordErrors, wordsArrayErrors, wordIndex);
                                    if (wordsArrayErrors.length) {
                                        sentenceErrors.wordSubdoc = wordsArrayErrors;
                                        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
                                        if (sentencesArrayErrors.length) {
                                            phraseErrors.sentenceSubdoc = sentencesArrayErrors;
                                            phrasesArrayErrors[phraseIndex] = phraseErrors;
                                            if (phrasesArrayErrors.length) {
                                                paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                                                paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                                                if (paragraphsArrayErrors.length) {
                                                    errors.paragraphs = paragraphsArrayErrors
                                                }
                                            }
                                        }
                                    }

                                    // <----- PARAGRAPH -> PHRASE -> SENTENCE -> WORD -> GRAMMAR Validation -----> 

                                    if (!word || !word.wordGrammarSubdoc || !word.wordGrammarSubdoc.length) {
                                        wordErrors.wordGrammarSubdoc = { _error: 'Please enter the Grammar details of this Word' };
                                        wordsArrayErrors[wordIndex] = wordErrors;
                                        if (wordsArrayErrors.length) {
                                            sentenceErrors.wordSubdoc = wordsArrayErrors;
                                            sentencesArrayErrors[sentenceIndex] = sentenceErrors;
                                            if (sentencesArrayErrors.length) {
                                                phraseErrors.sentenceSubdoc = sentencesArrayErrors;
                                                phrasesArrayErrors[phraseIndex] = phraseErrors;
                                                if (phrasesArrayErrors.length) {
                                                    paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                                                    paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                                                    if (paragraphsArrayErrors.length) {
                                                        errors.paragraphs = paragraphsArrayErrors
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        const wordGrammarsArrayErrors = [];
                                        word.wordGrammarSubdoc.forEach((wordGrammar, wordGrammarIndex) => {
                                            const wordGrammarErrors = {};
                                            validateWordGrammar(wordGrammar, wordGrammarErrors, wordGrammarsArrayErrors, wordGrammarIndex);
                                            if (wordGrammarsArrayErrors.length) {
                                                wordErrors.wordGrammarSubdoc = wordGrammarsArrayErrors;
                                                wordsArrayErrors[wordIndex] = wordErrors;
                                                if (wordsArrayErrors.length) {
                                                    sentenceErrors.wordSubdoc = wordsArrayErrors;
                                                    sentencesArrayErrors[sentenceIndex] = sentenceErrors;
                                                    if (sentencesArrayErrors.length) {
                                                        phraseErrors.sentenceSubdoc = sentencesArrayErrors;
                                                        phrasesArrayErrors[phraseIndex] = phraseErrors;
                                                        if (phrasesArrayErrors.length) {
                                                            paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                                                            paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                                                            if (paragraphsArrayErrors.length) {
                                                                errors.paragraphs = paragraphsArrayErrors
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        })
                                    }

                                    // <----- PARAGRAPH -> PHRASE -> SENTENCE -> WORD -> VOCABULARY Validation -----> //

                                    if (!word || !word.wordVocabularySubdoc || !word.wordVocabularySubdoc.length) {
                                        wordErrors.wordVocabularySubdoc = { _error: 'Please enter the Vocabulary details of this Word' };
                                        wordsArrayErrors[wordIndex] = wordErrors;
                                        if (wordsArrayErrors.length) {
                                            sentenceErrors.wordSubdoc = wordsArrayErrors;
                                            sentencesArrayErrors[sentenceIndex] = sentenceErrors;
                                            if (sentencesArrayErrors.length) {
                                                phraseErrors.sentenceSubdoc = sentencesArrayErrors;
                                                phrasesArrayErrors[phraseIndex] = phraseErrors;
                                                if (phrasesArrayErrors.length) {
                                                    paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                                                    paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                                                    if (paragraphsArrayErrors.length) {
                                                        errors.paragraphs = paragraphsArrayErrors
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        const wordVocabularysArrayErrors = [];
                                        word.wordVocabularySubdoc.forEach((wordVocabulary, wordVocabularyIndex) => {
                                            const wordVocabularyErrors = {};
                                            validateWordVocabulary(wordVocabulary, wordVocabularyErrors, wordVocabularysArrayErrors, wordVocabularyIndex);
                                            if (wordVocabularysArrayErrors.length) {
                                                wordErrors.wordVocabularySubdoc = wordVocabularysArrayErrors;
                                                wordsArrayErrors[wordIndex] = wordErrors;
                                                if (wordsArrayErrors.length) {
                                                    sentenceErrors.wordSubdoc = wordsArrayErrors;
                                                    sentencesArrayErrors[sentenceIndex] = sentenceErrors;
                                                    if (sentencesArrayErrors.length) {
                                                        phraseErrors.sentenceSubdoc = sentencesArrayErrors;
                                                        phrasesArrayErrors[phraseIndex] = phraseErrors;
                                                        if (phrasesArrayErrors.length) {
                                                            paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                                                            paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                                                            if (paragraphsArrayErrors.length) {
                                                                errors.paragraphs = paragraphsArrayErrors
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        })
                                    }

                                    // <----- PARAGRAPH -> PHRASE -> SENTENCE -> WORD -> PUNCTUATION Validation -----> //

                                    if (!word || !word.punctuationSubdoc || !word.punctuationSubdoc.length) {
                                        // wordErrors.punctuationSubdoc -> covered by a Warning in warn.js
                                    } else {
                                        const wordPunctuationsArrayErrors = [];
                                        word.punctuationSubdoc.forEach((wordPunctuation, wordPunctuationIndex) => {
                                            const wordPunctuationErrors = {};
                                            validatePunctuation(wordPunctuation, wordPunctuationErrors, wordPunctuationsArrayErrors, wordPunctuationIndex);
                                            if (wordPunctuationsArrayErrors.length) {
                                                wordErrors.punctuationSubdoc = wordPunctuationsArrayErrors;
                                                wordsArrayErrors[wordIndex] = wordErrors;
                                                if (wordsArrayErrors.length) {
                                                    sentenceErrors.wordSubdoc = wordsArrayErrors;
                                                    sentencesArrayErrors[sentenceIndex] = sentenceErrors;
                                                    if (sentencesArrayErrors.length) {
                                                        phraseErrors.sentenceSubdoc = sentencesArrayErrors;
                                                        phrasesArrayErrors[phraseIndex] = phraseErrors;
                                                        if (phrasesArrayErrors.length) {
                                                            paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                                                            paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                                                            if (paragraphsArrayErrors.length) {
                                                                errors.paragraphs = paragraphsArrayErrors
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        })
                                    }

                                })
                            }

                            // <----- PARAGRAPH -> PHRASE -> SENTENCE -> PUNCTUATION Validation -----> //

                            if (!sentence || !sentence.punctuationSubdoc || !sentence.punctuationSubdoc.length) {
                                sentenceErrors.punctuationSubdoc = { _error: 'At least one Punctuation must be entered' };
                                sentencesArrayErrors[sentenceIndex] = sentenceErrors;
                                if (sentencesArrayErrors.length) {
                                    phraseErrors.sentenceSubdoc = sentencesArrayErrors;
                                    phrasesArrayErrors[phraseIndex] = phraseErrors;
                                    if (phrasesArrayErrors.length) {
                                        paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                                        paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                                        if (paragraphsArrayErrors.length) {
                                            errors.paragraphs = paragraphsArrayErrors;
                                        }
                                    }
                                }
                            } else {
                                const punctuationsArrayErrors = [];
                                sentence.punctuationSubdoc.forEach((punctuation, punctuationIndex) => {
                                    const punctuationErrors = {};
                                    validatePunctuation(punctuation, punctuationErrors, punctuationsArrayErrors, punctuationIndex);
                                    if (punctuationsArrayErrors.length) {
                                        sentenceErrors.punctuationSubdoc = punctuationsArrayErrors;
                                        sentencesArrayErrors[sentenceIndex] = sentenceErrors;
                                        if (sentencesArrayErrors.length) {
                                            phraseErrors.sentenceSubdoc = sentencesArrayErrors;
                                            phrasesArrayErrors[phraseIndex] = phraseErrors;
                                            if (phrasesArrayErrors.length) {
                                                paragraphErrors.phraseSubdoc = phrasesArrayErrors;
                                                paragraphsArrayErrors[paragraphIndex] = paragraphErrors;
                                                if (paragraphsArrayErrors.length) {
                                                    errors.paragraphs = paragraphsArrayErrors
                                                }
                                            }
                                        }
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    console.log('The LAST ERROS object is --->>>', errors);
    return errors;
}
