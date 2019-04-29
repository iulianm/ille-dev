
export default values => {

    var warnings = {};

    // <----- PARAGRAPHS Warning -----> //

    if (!values.paragraphs || !values.paragraphs.length) {
        warnings.paragraphs = {};
    } else {
        const paragraphsArrayWarnings = [];
        values.paragraphs.forEach((paragraph, paragraphIndex) => {
            const paragraphWarnings = {};

            // <----- PARAGRAPH -> PHRASE Warning -----> //

            if (!paragraph.phraseSubdoc || !paragraph.phraseSubdoc.length) {
                paragraphWarnings.phraseSubdoc = {};
                paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                if (paragraphsArrayWarnings.length) {
                    warnings.paragraphs = paragraphsArrayWarnings;
                }
            } else {
                const phrasesArrayWarnings = [];
                paragraph.phraseSubdoc.forEach((phrase, phraseIndex) => {
                    const phraseWarnings = {};
                    phraseWarnings.sentenceSubdoc = {};
                    phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                    if (phrasesArrayWarnings.length) {
                        paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                        paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                        if (paragraphsArrayWarnings.length) {
                            warnings.paragraphs = paragraphsArrayWarnings;
                        }
                    }

                    // <----- PARAGRAPH -> PHRASE -> PUNCTUATION Warning -----> //

                    if (!phrase || !phrase.punctuationSubdoc || !phrase.punctuationSubdoc.length) {
                        phraseWarnings.punctuationSubdoc = { _warning: '[Optional] Is there any Punctuation that belongs to the level of Phrase?' };
                        phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                        if (phrasesArrayWarnings.length) {
                            paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                            paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                            if (paragraphsArrayWarnings.length) {
                                warnings.paragraphs = paragraphsArrayWarnings;
                            }
                        }
                    } else {
                        const punctuationsArrayWarnings = [];
                        phrase.punctuationSubdoc.forEach((punctuation, punctuationIndex) => {
                            const punctuationWarnings = {};
                            if (punctuationsArrayWarnings.length) {
                                phraseWarnings.punctuationSubdoc = punctuationsArrayWarnings;
                                phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                if (phrasesArrayWarnings.length) {
                                    paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                    paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                    if (paragraphsArrayWarnings.length) {
                                        warnings.paragraphs = paragraphsArrayWarnings
                                    }
                                }
                            }
                        })
                    }

                    // <----- PARAGRAPH -> PHRASE -> SENTENCE Warning -----> //

                    if (!phrase || !phrase.sentenceSubdoc || !phrase.sentenceSubdoc.length) {
                        phraseWarnings.sentenceSubdoc = {};
                        phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                        if (phrasesArrayWarnings.length) {
                            paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                            paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                            if (paragraphsArrayWarnings.length) {
                                warnings.paragraphs = paragraphsArrayWarnings;
                            }
                        }
                    } else {
                        const sentencesArrayWarnings = [];
                        phrase.sentenceSubdoc.forEach((sentence, sentenceIndex) => {
                            const sentenceWarnings = {};
                            sentenceWarnings.wordSubdoc = {};
                            sentenceWarnings.punctuationSubdoc = {};
                            sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                            if (sentencesArrayWarnings.length) {
                                phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                if (phrasesArrayWarnings.length) {
                                    paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                    paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                    if (paragraphsArrayWarnings.length) {
                                        warnings.paragraphs = paragraphsArrayWarnings;
                                    }
                                }
                            }

                            // <----- PARAGRAPH -> PHRASE -> SENTENCE -> EXPRESSION Warning -----> //

                            if (!sentence || !sentence.expressionSubdoc || !sentence.expressionSubdoc.length) {
                                sentenceWarnings.expressionSubdoc = { _warning: '[Optional] Is there any Expression in this Sentence?' };
                                sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                                if (sentencesArrayWarnings.length) {
                                    phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                    phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                    if (phrasesArrayWarnings.length) {
                                        paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                        paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                        if (paragraphsArrayWarnings.length) {
                                            warnings.paragraphs = paragraphsArrayWarnings;
                                        }
                                    }
                                }
                            } else {
                                const expressionsArrayWarnings = [];
                                sentence.expressionSubdoc.forEach((expression, expressionIndex) => {
                                    const expressionWarnings = {};
                                    if (expressionsArrayWarnings.length) {
                                        sentenceWarnings.expressionSubdoc = expressionsArrayWarnings;
                                        sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                                        if (sentencesArrayWarnings.length) {
                                            phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                            phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                            if (phrasesArrayWarnings.length) {
                                                paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                                paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                                if (paragraphsArrayWarnings.length) {
                                                    warnings.paragraphs = paragraphsArrayWarnings
                                                }
                                            }
                                        }
                                    }
                                })
                            }

                            // <----- PARAGRAPH -> PHRASE -> SENTENCE -> WORD Warning -----> //

                            if (!sentence || !sentence.wordSubdoc || !sentence.wordSubdoc.length) {
                                sentenceWarnings.wordSubdoc = {};
                                sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                                if (sentencesArrayWarnings.length) {
                                    phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                    phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                    if (phrasesArrayWarnings.length) {
                                        paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                        paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                        if (paragraphsArrayWarnings.length) {
                                            warnings.paragraphs = paragraphsArrayWarnings;
                                        }
                                    }
                                }

                            } else {
                                const wordsArrayWarnings = [];
                                sentence.wordSubdoc.forEach((word, wordIndex) => {
                                    const wordWarnings = {};
                                    if (wordsArrayWarnings.length) {
                                        sentenceWarnings.wordSubdoc = wordsArrayWarnings;
                                        sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                                        if (sentencesArrayWarnings.length) {
                                            phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                            phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                            if (phrasesArrayWarnings.length) {
                                                paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                                paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                                if (paragraphsArrayWarnings.length) {
                                                    warnings.paragraphs = paragraphsArrayWarnings
                                                }
                                            }
                                        }
                                    }

                                    // <----- PARAGRAPH -> PHRASE -> SENTENCE -> WORD -> GRAMMAR Validation -----> 

                                    if (!word || !word.wordGrammarSubdoc || !word.wordGrammarSubdoc.length) {
                                        wordWarnings.wordGrammarSubdoc = {};
                                        wordsArrayWarnings[wordIndex] = wordWarnings;
                                        if (wordsArrayWarnings.length) {
                                            sentenceWarnings.wordSubdoc = wordsArrayWarnings;
                                            sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                                            if (sentencesArrayWarnings.length) {
                                                phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                                phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                                if (phrasesArrayWarnings.length) {
                                                    paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                                    paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                                    if (paragraphsArrayWarnings.length) {
                                                        warnings.paragraphs = paragraphsArrayWarnings
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        const wordGrammarsArrayWarnings = [];
                                        word.wordGrammarSubdoc.forEach((wordGrammar, wordGrammarIndex) => {
                                            const wordGrammarWarnings = {};
                                            if (wordGrammarsArrayWarnings.length) {
                                                wordWarnings.wordGrammarSubdoc = wordGrammarsArrayWarnings;
                                                wordsArrayWarnings[wordIndex] = wordWarnings;
                                                if (wordsArrayWarnings.length) {
                                                    sentenceWarnings.wordSubdoc = wordsArrayWarnings;
                                                    sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                                                    if (sentencesArrayWarnings.length) {
                                                        phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                                        phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                                        if (phrasesArrayWarnings.length) {
                                                            paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                                            paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                                            if (paragraphsArrayWarnings.length) {
                                                                warnings.paragraphs = paragraphsArrayWarnings
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        })
                                    }

                                    // <----- PARAGRAPH -> PHRASE -> SENTENCE -> WORD -> VOCABULARY Validation -----> //

                                    if (!word || !word.wordVocabularySubdoc || !word.wordVocabularySubdoc.length) {
                                        wordWarnings.wordVocabularySubdoc = {};
                                        wordsArrayWarnings[wordIndex] = wordWarnings;
                                        if (wordsArrayWarnings.length) {
                                            sentenceWarnings.wordSubdoc = wordsArrayWarnings;
                                            sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                                            if (sentencesArrayWarnings.length) {
                                                phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                                phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                                if (phrasesArrayWarnings.length) {
                                                    paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                                    paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                                    if (paragraphsArrayWarnings.length) {
                                                        warnings.paragraphs = paragraphsArrayWarnings
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        const wordVocabularysArrayWarnings = [];
                                        word.wordVocabularySubdoc.forEach((wordVocabulary, wordVocabularyIndex) => {
                                            const wordVocabularyWarnings = {};
                                            if (wordVocabularysArrayWarnings.length) {
                                                wordWarnings.wordVocabularySubdoc = wordVocabularysArrayWarnings;
                                                wordsArrayWarnings[wordIndex] = wordWarnings;
                                                if (wordsArrayWarnings.length) {
                                                    sentenceWarnings.wordSubdoc = wordsArrayWarnings;
                                                    sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                                                    if (sentencesArrayWarnings.length) {
                                                        phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                                        phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                                        if (phrasesArrayWarnings.length) {
                                                            paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                                            paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                                            if (paragraphsArrayWarnings.length) {
                                                                warnings.paragraphs = paragraphsArrayWarnings
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        })
                                    }


                                    // <----- PARAGRAPH -> PHRASE -> SENTENCE -> WORD -> PUNCTUATION Validation -----> //

                                    if (!word || !word.punctuationSubdoc || !word.punctuationSubdoc.length) {
                                        wordWarnings.punctuationSubdoc = { _warning: '[Optional] Is there any Punctuation in this Word?' };
                                        wordsArrayWarnings[wordIndex] = wordWarnings;
                                        if (wordsArrayWarnings.length) {
                                            sentenceWarnings.wordSubdoc = wordsArrayWarnings;
                                            sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                                            if (sentencesArrayWarnings.length) {
                                                phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                                phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                                if (phrasesArrayWarnings.length) {
                                                    paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                                    paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                                    if (paragraphsArrayWarnings.length) {
                                                        warnings.paragraphs = paragraphsArrayWarnings
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        const wordPunctuationsArrayWarnings = [];
                                        word.punctuationSubdoc.forEach((wordPunctuation, wordPunctuationIndex) => {
                                            const wordPunctuationWarnings = {};
                                            if (wordPunctuationsArrayWarnings.length) {
                                                wordWarnings.punctuationSubdoc = wordPunctuationsArrayWarnings;
                                                wordsArrayWarnings[wordIndex] = wordWarnings;
                                                if (wordsArrayWarnings.length) {
                                                    sentenceWarnings.wordSubdoc = wordsArrayWarnings;
                                                    sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                                                    if (sentencesArrayWarnings.length) {
                                                        phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                                        phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                                        if (phrasesArrayWarnings.length) {
                                                            paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                                            paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                                            if (paragraphsArrayWarnings.length) {
                                                                warnings.paragraphs = paragraphsArrayWarnings
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        })
                                    }
                                })
                            }

                            // <----- PARAGRAPH -> PHRASE -> SENTENCE -> PUNCTUATION Warning -----> //

                            if (!sentence || !sentence.punctuationSubdoc || !sentence.punctuationSubdoc.length) {
                                sentenceWarnings.punctuationSubdoc = {};
                                sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                                if (sentencesArrayWarnings.length) {
                                    phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                    phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                    if (phrasesArrayWarnings.length) {
                                        paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                        paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                        if (paragraphsArrayWarnings.length) {
                                            warnings.paragraphs = paragraphsArrayWarnings;
                                        }
                                    }
                                }
                            } else {
                                const punctuationsArrayWarnings = [];
                                sentence.punctuationSubdoc.forEach((punctuation, punctuationIndex) => {
                                    const punctuationWarnings = {};
                                    if (punctuationsArrayWarnings.length) {
                                        sentenceWarnings.punctuationSubdoc = punctuationsArrayWarnings;
                                        sentencesArrayWarnings[sentenceIndex] = sentenceWarnings;
                                        if (sentencesArrayWarnings.length) {
                                            phraseWarnings.sentenceSubdoc = sentencesArrayWarnings;
                                            phrasesArrayWarnings[phraseIndex] = phraseWarnings;
                                            if (phrasesArrayWarnings.length) {
                                                paragraphWarnings.phraseSubdoc = phrasesArrayWarnings;
                                                paragraphsArrayWarnings[paragraphIndex] = paragraphWarnings;
                                                if (paragraphsArrayWarnings.length) {
                                                    warnings.paragraphs = paragraphsArrayWarnings
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
    console.log('The LAST WARNINGS object is --->>>', warnings);
    return warnings;
}
