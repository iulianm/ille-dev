const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

// const Paragraph = mongoose.model('paragraph');
const Phrase = mongoose.model('phrase');
const Sentence = mongoose.model('sentence');
const Punctuation = mongoose.model('punctuation');
const Word = mongoose.model('word');
const WordVocabulary = mongoose.model('wordVocabulary');
const Expression = mongoose.model('expression');

module.exports = app => {

    app.get('/api/phrases', requireLogin, async (req, res) => {
        // console.log('The GRAMMAR ROUTES get ParagraphS is called in Grammar Rotues!!');
        // //const phrases = await Phrase.findAll();
        // const paragraph = await Paragraph.findOne({ content: 'Die gute Nachricht ist, dass Investieren und erfolgreicher Vermögensaufbau nicht kompliziert sein müssen. Mit der im Buch vorgestellten Strategie haben Sie die Möglichkeit, ihre Finanzen und den Vermögensaufbau selbst erfolgreich in die Hand zu nehmen.' })

        // // console.log('This is the returned PARAGRAPH', paragraph);
        //res.send(paragraph);

        res.send([{
            content: 'Die gute Nachricht ist, dass Investieren und erfolgreicher Vermögensaufbau nicht kompliziert sein müssen.',
            no_sentences: 2,
            no_words: 13,
            no_expressions: 2,
            no_punctuations: 2,
            paragraph_position: 1,
            domain: ['finance'],
            domain_level: 'B1',
            grammar_level: 'B1',
            connectorPhraseSubdoc: [
                {
                    content: ',',
                    type: 'punctuation',
                    phrase_position: 2,
                    phrase_function: 'end of main sentence'
                },
                {
                    content: 'dass',
                    type: 'word',
                    phrase_position: 3,
                    phrase_function: 'introduce subordinate'
                }
            ],
            sentenceSubdoc: [{
                content: 'Die gute Nachricht ist',
                no_words: 4,
                no_expressions: 1,
                no_punctuations: 0,
                phrase_position: 1,
                phrase_function: 'main',
                domain: ['general'],
                domain_level: 'A1',
                grammar_level: 'A1',
                connectorSentenceSubdoc: [],
                expressionSubdoc: [{
                    content: 'die gute Nachricht',
                    no_words: 3,
                    domain: 'general',
                    domain_level: 'A1',
                    grammar_level: 'A1'
                }],
                wordSubdoc: [
                    {
                        content: 'Die',
                        root: 'das',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 1,
                        sentence_function: 'underlines a known noun',
                        grammatical_function: 'definite article',
                        expression_position: 1,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'gute',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 2,
                        sentence_function: 'attribute',
                        grammatical_function: 'adjective',
                        expression_position: 2,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'Nachricht',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 3,
                        sentence_function: 'subject',
                        grammatical_function: 'noun',
                        expression_position: 3,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'ist',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 4,
                        sentence_function: 'predicate',
                        grammatical_function: 'verb',
                        expression_position: 4,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    }
                ],
                punctuationSubdoc: []
            },
            {
                content: 'Investieren und erfolgreicher Vermögensaufbau nicht kompliziert sein müssen.',
                no_words: 8,
                no_expressions: 1,
                no_punctuations: 0,
                phrase_position: 4,
                phrase_function: 'subordonate',
                domain: ['finance'],
                domain_level: 'A2',
                grammar_level: 'A1',
                connectorSentenceSubdoc: [],
                expressionSubdoc: [{
                    content: 'erfolgreicher Vermögensaufbau',
                    no_words: 2,
                    domain: 'finance',
                    domain_level: 'A2',
                    grammar_level: 'A2'
                }],
                wordSubdoc: [
                    // {
                    //     content: 'dass',
                    //     phrase_position: 6,
                    //     phrase_function: 'subordonation link',
                    //     sentence_position: 1,
                    //     sentence_function: 'none',
                    //     grammatical_function: 'conjunction',
                    //     expression_position: 0,
                    //     domain: 'general',
                    //     domain_level: 'A1',
                    //     grammar_level: 'A1'
                    // },
                    {
                        content: 'Investieren',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 2,
                        sentence_function: 'subject',
                        grammatical_function: 'noun',
                        expression_position: 0,
                        domain: 'finance',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'und',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 3,
                        sentence_function: 'links nouns',
                        grammatical_function: 'conjunction',
                        expression_position: 0,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'erfolgreicher',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 4,
                        sentence_function: 'attibute',
                        grammatical_function: 'adjective',
                        expression_position: 1,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'Vermögensaufbau',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 5,
                        sentence_function: 'subject',
                        grammatical_function: 'noun',
                        expression_position: 2,
                        domain: 'finance',
                        domain_level: 'A2',
                        grammar_level: 'A2'
                    },
                    {
                        content: 'nicht',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 6,
                        sentence_function: 'negation',
                        grammatical_function: 'adverb',
                        expression_position: 0,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'kompliziert',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 7,
                        sentence_function: 'predicative',
                        grammatical_function: 'adjective',
                        expression_position: 0,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'sein',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 8,
                        sentence_function: 'compounded predicate',
                        grammatical_function: 'prediative verb',
                        expression_position: 0,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'müssen',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 9,
                        sentence_function: 'compounded predicate',
                        grammatical_function: 'modal verb',
                        expression_position: 0,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    }
                ],
                punctuationSubdoc: []
            }],
            punctuationSubdoc: [
                {
                    content: ',',
                    phrase_position: 2,
                    phrase_function: 'link subordination',
                    sentence_position: 0,
                    sentence_function: 'none',
                    expression_position: 0,
                    expression_function: 'none',
                    word_position: 0,
                    word_function: 'none',
                },
                {
                    content: '.',
                    phrase_position: 4,
                    phrase_function: 'none',
                    sentence_position: 0,
                    sentence_function: 'end of sentence',
                    expression_position: 0,
                    expression_function: 'none',
                    word_position: 0,
                    word_function: 'none',
                }]
        },
        {
            content: 'Die gute Nachricht ist, dass Investieren und erfolgreicher Vermögensaufbau nicht kompliziert sein müssen.',
            no_sentences: 2,
            no_words: 13,
            no_expressions: 2,
            no_punctuations: 2,
            paragraph_position: 1,
            domain: ['finance'],
            domain_level: 'B1',
            grammar_level: 'B1',
            connectorPhraseSubdoc: [
                {
                    content: ',',
                    type: 'punctuation',
                    phrase_position: 2,
                    phrase_function: 'end of main sentence'
                },
                {
                    content: 'dass',
                    type: 'word',
                    phrase_position: 3,
                    phrase_function: 'introduce subordinate'
                }
            ],
            sentenceSubdoc: [{
                content: 'Die gute Nachricht ist',
                no_words: 4,
                no_expressions: 1,
                no_punctuations: 0,
                phrase_position: 1,
                phrase_function: 'main',
                domain: ['general'],
                domain_level: 'A1',
                grammar_level: 'A1',
                connectorSentenceSubdoc: [],
                expressionSubdoc: [{
                    content: 'die gute Nachricht',
                    no_words: 3,
                    domain: 'general',
                    domain_level: 'A1',
                    grammar_level: 'A1'
                }],
                wordSubdoc: [
                    {
                        content: 'Die',
                        root: 'das',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 1,
                        sentence_function: 'underlines a known noun',
                        grammatical_function: 'definite article',
                        expression_position: 1,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'gute',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 2,
                        sentence_function: 'attribute',
                        grammatical_function: 'adjective',
                        expression_position: 2,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'Nachricht',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 3,
                        sentence_function: 'subject',
                        grammatical_function: 'noun',
                        expression_position: 3,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'ist',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 4,
                        sentence_function: 'predicate',
                        grammatical_function: 'verb',
                        expression_position: 4,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    }
                ],
                punctuationSubdoc: []
            },
            {
                content: 'Investieren und erfolgreicher Vermögensaufbau nicht kompliziert sein müssen.',
                no_words: 8,
                no_expressions: 1,
                no_punctuations: 0,
                phrase_position: 4,
                phrase_function: 'subordonate',
                domain: ['finance'],
                domain_level: 'A2',
                grammar_level: 'A1',
                connectorSentenceSubdoc: [],
                expressionSubdoc: [{
                    content: 'erfolgreicher Vermögensaufbau',
                    no_words: 2,
                    domain: 'finance',
                    domain_level: 'A2',
                    grammar_level: 'A2'
                }],
                wordSubdoc: [
                    // {
                    //     content: 'dass',
                    //     phrase_position: 6,
                    //     phrase_function: 'subordonation link',
                    //     sentence_position: 1,
                    //     sentence_function: 'none',
                    //     grammatical_function: 'conjunction',
                    //     expression_position: 0,
                    //     domain: 'general',
                    //     domain_level: 'A1',
                    //     grammar_level: 'A1'
                    // },
                    {
                        content: 'Investieren',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 2,
                        sentence_function: 'subject',
                        grammatical_function: 'noun',
                        expression_position: 0,
                        domain: 'finance',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'und',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 3,
                        sentence_function: 'links nouns',
                        grammatical_function: 'conjunction',
                        expression_position: 0,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'erfolgreicher',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 4,
                        sentence_function: 'attibute',
                        grammatical_function: 'adjective',
                        expression_position: 1,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'Vermögensaufbau',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 5,
                        sentence_function: 'subject',
                        grammatical_function: 'noun',
                        expression_position: 2,
                        domain: 'finance',
                        domain_level: 'A2',
                        grammar_level: 'A2'
                    },
                    {
                        content: 'nicht',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 6,
                        sentence_function: 'negation',
                        grammatical_function: 'adverb',
                        expression_position: 0,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'kompliziert',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 7,
                        sentence_function: 'predicative',
                        grammatical_function: 'adjective',
                        expression_position: 0,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'sein',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 8,
                        sentence_function: 'compounded predicate',
                        grammatical_function: 'prediative verb',
                        expression_position: 0,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    },
                    {
                        content: 'müssen',
                        phrase_position: 0,
                        phrase_function: 'none',
                        sentence_position: 9,
                        sentence_function: 'compounded predicate',
                        grammatical_function: 'modal verb',
                        expression_position: 0,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    }
                ],
                punctuationSubdoc: []
            }],
            punctuationSubdoc: [
                {
                    content: ',',
                    phrase_position: 2,
                    phrase_function: 'link subordination',
                    sentence_position: 0,
                    sentence_function: 'none',
                    expression_position: 0,
                    expression_function: 'none',
                    word_position: 0,
                    word_function: 'none',
                },
                {
                    content: '.',
                    phrase_position: 4,
                    phrase_function: 'none',
                    sentence_position: 0,
                    sentence_function: 'end of sentence',
                    expression_position: 0,
                    expression_function: 'none',
                    word_position: 0,
                    word_function: 'none',
                }]
        }
        ]
        )
    });

    app.get('/api/check/paragraph/content', requireLogin, async (req, res) => {
        console.log('The GRAMMAR ROUTES get Paragraph Content is called in Grammar Routes!!');

        let content = req.query.content;

        console.log('The passed Content in Grammar Routes is::::', content);

        const paragraphContent = await Paragraph.findOne({ content: content })

        console.log('This is the returned PARAGRAPH from /api/check/paragraph/content', paragraphContent);
        res.send(paragraphContent);
    });

    app.get('/api/check/phrase/content', requireLogin, async (req, res) => {
        console.log('The GRAMMAR ROUTES get Phrase Content is called in Grammar Routes!!');

        let content = req.query.content;

        console.log('The passed Content in Grammar Routes is::::', content);

        const phraseContent = await Phrase.findOne({ content: content })

        console.log('This is the returned PHRASE from /api/check/phrase/content', phraseContent);
        res.send(phraseContent);
    });

    app.post('/api/paragraph/new', requireLogin, (req, res) => {

        let counterParagraph = 0;
        let counterPhrase = 0;
        let counterSentence = 0;
        let counterPunctuationWord = 0;
        let counterPunctuationSentence = 0;
        let counterPunctuationPhrase = 0;
        let counterExpression = 0;
        let counterWord = 0;
        let counterWordVocabulary = 0;

        let newParagraphMap = new Map();

        req.body.paragraphs.forEach((paragraphObject) => {
            counterParagraph++;
            newParagraphMap.set('paragraph' + '_' + counterParagraph, new Paragraph(paragraphObject));

            if (paragraphObject.phraseSubdoc) {
                paragraphObject.phraseSubdoc.forEach((phraseObject) => {
                    counterPhrase++;
                    newParagraphMap.set('phrase' + '_' + counterPhrase, new Phrase(phraseObject));

                    // phrase_X._paragraphs.push(paragraph_X)
                    newParagraphMap.get('phrase' + '_' + counterPhrase)._paragraphs.push(newParagraphMap.get('paragraph' + '_' + counterParagraph))

                    // paragraph[X].phraseSubdoc[X]._phrases.push(phrase_X)
                    newParagraphMap.get('paragraph' + '_' + counterParagraph).phraseSubdoc[counterPhrase - 1]._phrases.push(newParagraphMap.get('phrase' + '_' + counterPhrase))

                    if (phraseObject.sentenceSubdoc) {
                        phraseObject.sentenceSubdoc.forEach((sentenceObject) => {
                            counterSentence++;
                            newParagraphMap.set('sentence' + '_' + counterSentence, new Sentence(sentenceObject));

                            // sentence_X._phrases.push(phrase_X)
                            newParagraphMap.get('sentence' + '_' + counterSentence)._phrases.push(newParagraphMap.get('phrase' + '_' + counterPhrase))

                            // paragraph[X].phraseSubdoc[X].sentenceSubdoc[X]._sentences.push(sentence_X)
                            newParagraphMap.get('paragraph' + '_' + counterParagraph).phraseSubdoc[counterPhrase - 1].sentenceSubdoc[counterSentence - 1]._sentences.push(newParagraphMap.get('sentence' + '_' + counterSentence))

                            // phraseSubdoc[X].sentenceSubdoc[X]._sentences.push(sentence_X)
                            newParagraphMap.get('phrase' + '_' + counterPhrase).sentenceSubdoc[counterSentence - 1]._sentences.push(newParagraphMap.get('sentence' + '_' + counterSentence))


                            if (sentenceObject.expressionSubdoc) {
                                sentenceObject.expressionSubdoc.forEach((expressionObject) => {
                                    counterExpression++;
                                    newParagraphMap.set('expression' + '_' + counterExpression, new Expression(expressionObject));

                                    // expression_X._phrases.push(phrase_X)
                                    newParagraphMap.get('expression' + '_' + counterExpression)._phrases.push(newParagraphMap.get('phrase' + '_' + counterPhrase))

                                    // expression_X._sentences.push(sentence_X)
                                    newParagraphMap.get('expression' + '_' + counterExpression)._sentences.push(newParagraphMap.get('sentence' + '_' + counterSentence))

                                    // paragraph[X].phraseSubdoc[X].sentenceSubdoc[X].expressionSubdoc[X]._expressions.push(expression_X)
                                    newParagraphMap.get('paragraph' + '_' + counterParagraph).phraseSubdoc[counterPhrase - 1].sentenceSubdoc[counterSentence - 1].expressionSubdoc[counterExpression - 1]._expressions.push(newParagraphMap.get('expression' + '_' + counterExpression))

                                    // phraseSubdoc[X].sentenceSubdoc[X].expressionSubdoc[X]._expressions.push(expression_X)
                                    newParagraphMap.get('phrase' + '_' + counterPhrase).sentenceSubdoc[counterSentence - 1].expressionSubdoc[counterExpression - 1]._expressions.push(newParagraphMap.get('expression' + '_' + counterExpression))

                                    // sentenceSubdoc[X].expressionSubdoc[X]._expressions.push(expression_X)
                                    newParagraphMap.get('sentence' + '_' + counterSentence).expressionSubdoc[counterExpression - 1]._expressions.push(newParagraphMap.get('expression' + '_' + counterExpression))

                                })
                            }

                            if (sentenceObject.wordSubdoc) {
                                sentenceObject.wordSubdoc.forEach((wordObject) => {
                                    counterWord++;
                                    newParagraphMap.set('word' + '_' + counterWord, new Word(wordObject));

                                    // word_X._phrases.push(phrase_X)
                                    newParagraphMap.get('word' + '_' + counterWord)._phrases.push(newParagraphMap.get('phrase' + '_' + counterPhrase))

                                    // word_X._sentences.push(sentence_X)
                                    newParagraphMap.get('word' + '_' + counterWord)._sentences.push(newParagraphMap.get('sentence' + '_' + counterSentence))

                                    // paragraph[X].phraseSubdoc[X].sentenceSubdoc[X].wordSubdoc[X]._words.push(word_X)

                                    console.log(newParagraphMap.get('paragraph' + '_' + counterParagraph).phraseSubdoc[counterPhrase - 1].sentenceSubdoc[counterSentence - 1]).wordSubdoc[counterWord - 1];

                                    newParagraphMap.get('paragraph' + '_' + counterParagraph).phraseSubdoc[counterPhrase - 1].sentenceSubdoc[counterSentence - 1].wordSubdoc[counterWord - 1]._words.push(newParagraphMap.get('word' + '_' + counterWord))

                                    // phraseSubdoc[X].sentenceSubdoc[X].wordSubdoc[X]._words.push(word_X)
                                    newParagraphMap.get('phrase' + '_' + counterPhrase).sentenceSubdoc[counterSentence - 1].wordSubdoc[counterWord - 1]._words.push(newParagraphMap.get('word' + '_' + counterWord))

                                    // sentenceSubdoc[X].wordSubdoc[X]._words.push(word_X)
                                    newParagraphMap.get('sentence' + '_' + counterSentence).wordSubdoc[counterWord - 1]._words.push(newParagraphMap.get('word' + '_' + counterWord))

                                    if (wordObject.wordVocabularySubdoc) {
                                        wordObject.wordVocabularySubdoc.forEach((wordVocabularyObject) => {
                                            counterWordVocabulary++;
                                            newParagraphMap.set('wordVocabulary' + '_' + counterWordVocabulary, new WordVocabulary(wordVocabularyObject));

                                            // wordVocabulary_X._words.push(word_X)
                                            newParagraphMap.get('wordVocabulary' + '_' + counterWordVocabulary)._words.push(newParagraphMap.get('word' + '_' + counterWord))
                                        })
                                    }

                                    if (wordObject.punctuationSubdoc) {
                                        wordObject.punctuationSubdoc.forEach((punctuationSentenceObject) => {
                                            counterPunctuationWord++;
                                            newParagraphMap.set('punctuationWord' + '_' + counterPunctuationWord, new Punctuation(punctuationSentenceObject));

                                            // punctuation_X._words.push(sentence_X)
                                            newParagraphMap.get('punctuationWord' + '_' + counterPunctuationWord)._words.push(newParagraphMap.get('word' + '_' + counterWord))

                                            // paragraph[X].phraseSubdoc[X].sentenceSubdoc[X].wordSubdoc[X].punctuationSubdoc[X]._punctuations.push(punctuation_X)
                                            newParagraphMap.get('paragraph' + '_' + counterParagraph).phraseSubdoc[counterPhrase - 1].sentenceSubdoc[counterSentence - 1].wordSubdoc[counterWord - 1].punctuationSubdoc[counterPunctuationWord - 1]._punctuations.push(newParagraphMap.get('punctuationWord' + '_' + counterPunctuationWord))

                                            // phraseSubdoc[X].sentenceSubdoc[X].wordSubdoc[X].punctuationSubdoc[X]._punctuations.push(punctuation_X)
                                            newParagraphMap.get('phrase' + '_' + counterPhrase).sentenceSubdoc[counterSentence - 1].wordSubdoc[counterWord - 1].punctuationSubdoc[counterPunctuationWord - 1]._punctuations.push(newParagraphMap.get('punctuationWord' + '_' + counterPunctuationWord))

                                            // sentenceSubdoc[X].wordSubdoc[X].punctuationSubdoc[X]._punctuations.push(punctuation_X)
                                            newParagraphMap.get('sentence' + '_' + counterSentence).wordSubdoc[counterWord - 1].punctuationSubdoc[counterPunctuationWord - 1]._punctuations.push(newParagraphMap.get('punctuationWord' + '_' + counterPunctuationWord))

                                            // wordSubdoc[X].punctuationSubdoc[X]._punctuations.push(punctuation_X)
                                            newParagraphMap.get('word' + '_' + counterWord).punctuationSubdoc[counterPunctuationWord - 1]._punctuations.push(newParagraphMap.get('punctuationWord' + '_' + counterPunctuationWord))
                                        })
                                    }
                                })
                            }

                            if (sentenceObject.punctuationSubdoc) {
                                sentenceObject.punctuationSubdoc.forEach((punctuationSentenceObject) => {
                                    counterPunctuationSentence++;
                                    newParagraphMap.set('punctuationSentence' + '_' + counterPunctuationSentence, new Punctuation(punctuationSentenceObject));

                                    // punctuation[X]._sentences.push(sentence_X)
                                    newParagraphMap.get('punctuationSentence' + '_' + counterPunctuationSentence)._sentences.push(newParagraphMap.get('sentence' + '_' + counterSentence))

                                    // paragraph[X].phraseSubdoc[X].sentenceSubdoc[X].punctuationSubdoc[X]._punctuations.push(punctuation_X)
                                    newParagraphMap.get('paragraph' + '_' + counterParagraph).phraseSubdoc[counterPhrase - 1].sentenceSubdoc[counterSentence - 1].punctuationSubdoc[counterPunctuationSentence - 1]._punctuations.push(newParagraphMap.get('punctuationSentence' + '_' + counterPunctuationSentence))

                                    // phraseSubdoc[X].sentenceSubdoc[X].punctuationSubdoc[X]._punctuations.push(punctuation_X)
                                    newParagraphMap.get('phrase' + '_' + counterPhrase).sentenceSubdoc[counterSentence - 1].punctuationSubdoc[counterPunctuationSentence - 1]._punctuations.push(newParagraphMap.get('punctuationSentence' + '_' + counterPunctuationSentence))

                                    // sentenceSubdoc[X].punctuationSubdoc[X]._punctuations.push(punctuation_X)
                                    newParagraphMap.get('sentence' + '_' + counterSentence).punctuationSubdoc[counterPunctuationSentence - 1]._punctuations.push(newParagraphMap.get('punctuationSentence' + '_' + counterPunctuationSentence))

                                })
                            }

                        })
                    }

                    if (phraseObject.punctuationSubdoc) {
                        phraseObject.punctuationSubdoc.forEach((punctuationPhraseObject) => {
                            counterPunctuationPhrase++;
                            newParagraphMap.set('punctuationPhrase' + '_' + counterPunctuationPhrase, new Punctuation(punctuationPhraseObject));

                            // punctuation_X._phrases.push(phrase_X)
                            newParagraphMap.get('punctuationPhrase' + '_' + counterPunctuationPhrase)._phrases.push(newParagraphMap.get('phrase' + '_' + counterPhrase))

                            //paragraph[X].phraseSubdoc[X].punctuationSubdoc[X]._punctuations.push(punctuation_X)
                            newParagraphMap.get('paragraph' + '_' + counterParagraph).phraseSubdoc[counterPhrase - 1].punctuationSubdoc[counterPunctuationPhrase - 1]._punctuations.push(newParagraphMap.get('punctuationPhrase' + '_' + counterPunctuationPhrase))

                            //phraseSubdoc[X].punctuationSubdoc[X]._punctuations.push(punctuation_X)
                            newParagraphMap.get('phrase' + '_' + counterPhrase).punctuationSubdoc[counterPunctuationPhrase - 1]._punctuations.push(newParagraphMap.get('punctuationPhrase' + '_' + counterPunctuationPhrase))

                        })
                    }
                })
            }
        })

        newParagraphMap.forEach((valueExpression, keyExpression) => {
            if (keyExpression.includes('expression_')) {
                newParagraphMap.forEach((valueWord, keyWord) => {
                    if (keyWord.includes('word_')) {
                        if (valueExpression.content.includes(valueWord.content)) {

                            // word_X._expressions.push(expression_X)
                            newParagraphMap.get(keyWord)._expressions.push(newParagraphMap.get(keyExpression))

                        }
                    }
                })
            }
        })

        newParagraphMap.forEach((value) => {

            value.save()
                .catch(error => {
                    console.log('There has been an error while saving this object: ', error);
                })
        })

        res.send('The entire Paragraph strucure was saved.');
    });
};