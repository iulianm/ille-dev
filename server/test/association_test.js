const assert = require('assert');
const Paragraph = require('../models/grammar_structures/paragraph');
const Phrase = require('../models/grammar_structures/phrase');
const Sentence = require('../models/grammar_structures/sentence');
const Word = require('../models/grammar_structures/word');
const Expression = require('../models/grammar_structures/expression');
const Punctuation = require('../models/grammar_structures/punctuation');

describe('Associations', () => {
    let paragraph_1,
        phrase_1,
        phrase_2,
        sentence_1,
        sentence_2,
        sentence_3,
        sentence_4,
        expression_1,
        expression_2,
        expression_3,
        expression_4,
        word_1,
        word_2,
        word_3,
        word_4,
        word_5,
        word_6,
        word_7,
        word_8,
        word_9,
        word_10,
        word_11,
        word_12,
        word_13,
        punctuation_1,
        punctuation_2,
        punctuation_3,
        punctuation_4;

    beforeEach(done => {
        paragraph_1 = new Paragraph({
            content: 'Die gute Nachricht ist, dass Investieren und erfolgreicher Vermögensaufbau nicht kompliziert sein müssen. Mit der im Buch vorgestellten Strategie haben Sie die Möglichkeit, ihre Finanzen und den Vermögensaufbau selbst erfolgreich in die Hand zu nehmen.',
            no_phrases: 2,
            no_sentences: 4,
            no_words: 35,
            no_expressions: 4,
            domain: ['finance'],
            domain_level: 'B1',
            grammar_level: 'B1',
            phraseSubdoc: [{
                content: 'Die gute Nachricht ist, dass Investieren und erfolgreicher Vermögensaufbau nicht kompliziert sein müssen.',
                no_sentences: 2,
                no_connectors: 1,
                no_words: 13,
                no_expressions: 2,
                no_punctuations: 2,
                paragraph_position: 1,
                domain: ['finance'],
                domain_level: 'B1',
                grammar_level: 'B1',
                sentenceSubdoc: [{
                    content: 'Die gute Nachricht ist',
                    no_words: 4,
                    no_expressions: 1,
                    no_punctuations: 0,
                    phrase_position: 1,
                    phrase_function: 'principal clause',
                    domain: ['general'],
                    domain_level: 'A1',
                    grammar_level: 'A1',
                    expressionSubdoc: [{
                        content: 'Die gute Nachricht',
                        no_words: 3,
                        domain: 'general',
                        domain_level: 'A1',
                        grammar_level: 'A1'
                    }],
                    wordSubdoc: [
                        {
                            content: 'die',
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
                    content: 'dass Investieren und erfolgreicher Vermögensaufbau nicht kompliziert sein müssen',
                    no_words: 8,
                    no_expressions: 1,
                    no_punctuations: 0,
                    phrase_position: 3,
                    phrase_function: 'subordonate clause',
                    domain: ['finance'],
                    domain_level: 'A2',
                    grammar_level: 'A1',
                    expressionSubdoc: [{
                        content: 'erfolgreicher Vermögensaufbau',
                        no_words: 2,
                        domain: 'finance',
                        domain_level: 'A2',
                        grammar_level: 'A2'
                    }],
                    wordSubdoc: [
                        {
                            content: 'dass',
                            phrase_position: 6,
                            phrase_function: 'subordonation link',
                            sentence_position: 1,
                            sentence_function: 'none',
                            grammatical_function: 'conjunction',
                            expression_position: 0,
                            domain: 'general',
                            domain_level: 'A1',
                            grammar_level: 'A1'
                        },
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
                content: 'Mit der im Buch vorgestellten Strategie haben Sie die Möglichkeit, ihre Finanzen und den Vermögensaufbau selbst erfolgreich in die Hand zu nehmen.',
                no_sentences: 2,
                no_connectors: 1,
                no_words: 22,
                no_expressions: 2,
                no_punctuations: 2,
                paragraph_position: 2,
                domain: ['finance'],
                domain_level: 'B1',
                grammar_level: 'B1',
                sentenceSubdoc: [
                    {
                        content: 'Mit der im Buch vorgestellten Strategie haben Sie die Möglichkeit',
                        no_words: 10,
                        no_expressions: 1,
                        no_punctuations: 0,
                        phrase_position: 1,
                        phrase_function: 'principal clause',
                        domain: ['general'],
                        domain_level: 'A2',
                        grammar_level: 'A2',
                        expressionSubdoc: [
                            {
                                content: 'vorgestellten Strategie',
                                no_words: 2,
                                domain: 'general',
                                domain_level: 'A2',
                                grammar_level: 'A2'
                            }
                        ],
                        wordSubdoc: [],
                        punctuationSubdoc: []
                    },
                    {
                        content: 'ihre Finanzen und den Vermögensaufbau selbst erfolgreich in die Hand zu nehmen',
                        no_words: 12,
                        no_expressions: 1,
                        no_punctuations: 0,
                        phrase_position: 3,
                        phrase_function: 'subordonate clause',
                        domain: ['finance'],
                        domain_level: 'A2',
                        grammar_level: 'A2',
                        expressionSubdoc: [
                            {
                                content: 'in die Hand zu nehmen',
                                no_words: 5,
                                domain: 'general',
                                domain_level: 'A1',
                                grammar_level: 'A1'
                            }
                        ],
                        wordSubdoc: [],
                        punctuationSubdoc: []
                    }
                ],
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
                    }
                ]
            }]



        });

        phrase_1 = new Phrase(
            {
                content: 'Die gute Nachricht ist, dass Investieren und erfolgreicher Vermögensaufbau nicht kompliziert sein müssen.',
                no_sentences: 2,
                no_connectors: 1,
                no_words: 13,
                no_expressions: 2,
                no_punctuations: 2,
                paragraph_position: 1,
                domain: ['finance'],
                domain_level: 'B1',
                grammar_level: 'B1'
            }
        );

        phrase_2 = new Phrase(
            {
                content: 'Mit der im Buch vorgestellten Strategie haben Sie die Möglichkeit, ihre Finanzen und den Vermögensaufbau selbst erfolgreich in die Hand zu nehmen.',
                no_sentences: 2,
                no_connectors: 1,
                no_words: 22,
                no_expressions: 2,
                no_punctuations: 2,
                paragraph_position: 2,
                domain: ['finance'],
                domain_level: 'B1',
                grammar_level: 'B1'
            }
        );

        sentence_1 = new Sentence({
            content: 'Die gute Nachricht ist',
            no_words: 4,
            no_expressions: 1,
            no_punctuations: 0,
            phrase_position: 1,
            phrase_function: 'principal clause',
            domain: ['general'],
            domain_level: 'A1',
            grammar_level: 'A1'
        });

        sentence_2 = new Sentence({
            content: 'dass Investieren und erfolgreicher Vermögensaufbau nicht kompliziert sein müssen',
            no_words: 8,
            no_expressions: 1,
            no_punctuations: 0,
            phrase_position: 3,
            phrase_function: 'subordonate clause',
            domain: ['finance'],
            domain_level: 'A2',
            grammar_level: 'A1'
        });

        sentence_3 = new Sentence({
            content: 'Mit der im Buch vorgestellten Strategie haben Sie die Möglichkeit',
            no_words: 10,
            no_expressions: 1,
            no_punctuations: 0,
            phrase_position: 1,
            phrase_function: 'principal clause',
            domain: ['general'],
            domain_level: 'A2',
            grammar_level: 'A2'
        });

        sentence_4 = new Sentence({
            content: 'ihre Finanzen und den Vermögensaufbau selbst erfolgreich in die Hand zu nehmen',
            no_words: 12,
            no_expressions: 1,
            no_punctuations: 0,
            phrase_position: 3,
            phrase_function: 'subordonate clause',
            domain: ['finance'],
            domain_level: 'A2',
            grammar_level: 'A2'
        });

        word_1 = new Word({
            content: 'die',
            phrase_position: 0,
            phrase_function: 'none',
            sentence_position: 1,
            sentence_function: 'underlines a known noun',
            grammatical_function: 'definite article',
            expression_position: 1,
            domain: 'general',
            domain_level: 'A1',
            grammar_level: 'A1'
        });

        word_2 = new Word({
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
        });

        word_3 = new Word({
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
        });

        word_4 = new Word({
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
        });

        word_5 = new Word({
            content: 'dass',
            phrase_position: 6,
            phrase_function: 'subordonation link',
            sentence_position: 1,
            sentence_function: 'none',
            grammatical_function: 'conjunction',
            expression_position: 0,
            domain: 'general',
            domain_level: 'A1',
            grammar_level: 'A1'
        });

        word_6 = new Word({
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
        });

        word_7 = new Word({
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
        });

        word_8 = new Word({
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
        });

        word_9 = new Word({
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
        });

        word_10 = new Word({
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
        });

        word_11 = new Word({
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
        });

        word_12 = new Word({
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
        });

        word_13 = new Word({
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
        });

        expression_1 = new Expression({
            content: 'Die gute Nachricht',
            no_words: 3,
            domain: 'general',
            domain_level: 'A1',
            grammar_level: 'A1'
        });

        expression_2 = new Expression({
            content: 'erfolgreicher Vermögensaufbau',
            no_words: 2,
            domain: 'finance',
            domain_level: 'A2',
            grammar_level: 'A2'
        });

        expression_3 = new Expression({
            content: 'vorgestellten Strategie',
            no_words: 2,
            domain: 'general',
            domain_level: 'A2',
            grammar_level: 'A2'
        });

        expression_4 = new Expression({
            content: 'in die Hand zu nehmen',
            no_words: 5,
            domain: 'general',
            domain_level: 'A1',
            grammar_level: 'A1'
        });

        punctuation_1 = new Punctuation({
            content: ',',
            phrase_position: 2,
            phrase_function: 'subordonate link',
            sentence_position: 0,
            sentence_function: 'none',
            expression_position: 0,
            expression_function: 'none',
            word_position: 0,
            word_function: 'none',
        });

        punctuation_2 = new Punctuation({
            content: '.',
            phrase_position: 4,
            phrase_function: 'none',
            sentence_position: 9,
            sentence_function: 'end of sentence',
            expression_position: 0,
            expression_function: 'none',
            word_position: 0,
            word_function: 'none',
        });

        punctuation_3 = new Punctuation({
            content: ',',
            phrase_position: 6,
            phrase_function: 'subordonate link',
            sentence_position: 0,
            sentence_function: 'none',
            expression_position: 0,
            expression_function: 'none',
            word_position: 0,
            word_function: 'none',
        });

        punctuation_4 = new Punctuation({
            content: '.',
            phrase_position: 8,
            phrase_function: 'none',
            sentence_position: 13,
            sentence_function: 'end of sentence',
            expression_position: 0,
            expression_function: 'none',
            word_position: 0,
            word_function: 'none',
        });

        phrase_1._paragraphs.push(paragraph_1);
        phrase_2._paragraphs.push(paragraph_1);

        // missing the paragraph.phraseSubdoc_phrases part

        paragraph_1.phraseSubdoc[0].sentenceSubdoc[0]._sentences.push(sentence_1);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[1]._sentences.push(sentence_2);
        paragraph_1.phraseSubdoc[1].sentenceSubdoc[0]._sentences.push(sentence_3);
        paragraph_1.phraseSubdoc[1].sentenceSubdoc[1]._sentences.push(sentence_4);

        paragraph_1.phraseSubdoc[0].sentenceSubdoc[0].expressionSubdoc[0]._expressions.push(expression_1);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[1].expressionSubdoc[0]._expressions.push(expression_2);
        paragraph_1.phraseSubdoc[1].sentenceSubdoc[0].expressionSubdoc[0]._expressions.push(expression_3);
        paragraph_1.phraseSubdoc[1].sentenceSubdoc[1].expressionSubdoc[0]._expressions.push(expression_4);

        // also needed puntuations for sentences!
        paragraph_1.phraseSubdoc[0].punctuationSubdoc[0]._punctuations.push(punctuation_1);
        paragraph_1.phraseSubdoc[0].punctuationSubdoc[1]._punctuations.push(punctuation_2);
        paragraph_1.phraseSubdoc[1].punctuationSubdoc[0]._punctuations.push(punctuation_3);
        paragraph_1.phraseSubdoc[1].punctuationSubdoc[1]._punctuations.push(punctuation_4);

        sentence_1._phrases.push(phrase_1);
        sentence_2._phrases.push(phrase_1);

        sentence_3._phrases.push(phrase_2);
        sentence_4._phrases.push(phrase_2);

        expression_1._phrases.push(phrase_1);
        expression_1._sentences.push(sentence_1);

        expression_2._phrases.push(phrase_1);
        expression_2._sentences.push(sentence_2);

        expression_3._phrases.push(phrase_2);
        expression_3._sentences.push(sentence_3);

        expression_4._phrases.push(phrase_2);
        expression_4._sentences.push(sentence_4);

        punctuation_1._phrases.push(phrase_1);
        punctuation_2._sentences.push(sentence_2);
        punctuation_3._phrases.push(phrase_2);
        punctuation_4._sentences.push(sentence_4);

        word_1._phrases.push(phrase_1);
        word_2._phrases.push(phrase_1);
        word_3._phrases.push(phrase_1);
        word_4._phrases.push(phrase_1);
        word_5._phrases.push(phrase_1);
        word_6._phrases.push(phrase_1);
        word_7._phrases.push(phrase_1);
        word_8._phrases.push(phrase_1);
        word_9._phrases.push(phrase_1);
        word_10._phrases.push(phrase_1);
        word_11._phrases.push(phrase_1);
        word_12._phrases.push(phrase_1);
        word_13._phrases.push(phrase_1);

        word_1._sentences.push(sentence_1);
        word_2._sentences.push(sentence_1);
        word_3._sentences.push(sentence_1);
        word_4._sentences.push(sentence_1);
        word_5._sentences.push(sentence_2);
        word_6._sentences.push(sentence_2);
        word_7._sentences.push(sentence_2);
        word_8._sentences.push(sentence_2);
        word_9._sentences.push(sentence_2);
        word_10._sentences.push(sentence_2);
        word_11._sentences.push(sentence_2);
        word_12._sentences.push(sentence_2);
        word_13._sentences.push(sentence_2);

        word_1._expressions.push(expression_1);
        word_2._expressions.push(expression_1);
        word_3._expressions.push(expression_1);
        word_4._expressions.push(expression_1);
        word_8._expressions.push(expression_2);
        word_9._expressions.push(expression_2);
        // word_7._expressions.push(expression_2);
        // word_8._expressions.push(expression_2);
        // word_9._expressions.push(expression_2);
        // word_10._expressions.push(expression_2);
        // word_11._expressions.push(expression_2);
        // word_12._expressions.push(expression_2);

        paragraph_1.phraseSubdoc[0].sentenceSubdoc[0].wordSubdoc[0]._words.push(word_1);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[0].wordSubdoc[1]._words.push(word_2);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[0].wordSubdoc[2]._words.push(word_3);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[0].wordSubdoc[3]._words.push(word_4);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[1].wordSubdoc[0]._words.push(word_5);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[1].wordSubdoc[1]._words.push(word_6);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[1].wordSubdoc[2]._words.push(word_7);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[1].wordSubdoc[3]._words.push(word_8);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[1].wordSubdoc[4]._words.push(word_9);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[1].wordSubdoc[5]._words.push(word_10);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[1].wordSubdoc[6]._words.push(word_11);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[1].wordSubdoc[7]._words.push(word_12);
        paragraph_1.phraseSubdoc[0].sentenceSubdoc[1].wordSubdoc[8]._words.push(word_13);



        Promise.all([
            paragraph_1.save(),
            phrase_1.save(),
            phrase_2.save(),
            sentence_1.save(),
            sentence_2.save(),
            sentence_3.save(),
            sentence_4.save(),
            word_1.save(),
            word_2.save(),
            word_3.save(),
            word_4.save(),
            word_5.save(),
            word_6.save(),
            word_7.save(),
            word_8.save(),
            word_9.save(),
            word_10.save(),
            word_11.save(),
            word_12.save(),
            word_13.save(),
            expression_1.save(),
            expression_2.save(),
            expression_3.save(),
            expression_4.save(),
            punctuation_1.save(),
            punctuation_2.save(),
            punctuation_3.save(),
            punctuation_4.save()
        ]).then(() => done());
    });

    it('--> saves a relation between a Phrase and a Sentence', done => {
        console.log('INCEPE TESTUL!!!');
        Paragraph.findOne({ content: 'Die gute Nachricht ist, dass Investieren und erfolgreicher Vermögensaufbau nicht kompliziert sein müssen. Mit der im Buch vorgestellten Strategie haben Sie die Möglichkeit, ihre Finanzen und den Vermögensaufbau selbst erfolgreich in die Hand zu nehmen.' })
            .populate('phrase_1, phrase_2')
            .then(p_paragraph => {
                assert(p_paragraph.phraseSubdoc[0].sentenceSubdoc.length === 2);
                console.log(p_paragraph.phraseSubdoc[0].sentenceSubdoc[1].toString());
                assert(p_paragraph.phraseSubdoc[0].sentenceSubdoc[1].content === 'dass Investieren und erfolgreicher Vermögensaufbau nicht kompliziert sein müssen');
                console.log('APROAPE GATA>>>>>>>>>>>>');
                //assert(p_phrase.sentenceSubdoc[1].wordSubdoc[3].content === 'erfolgreicher');
                console.log('SO GATA');
                done();
            })
            .catch(err => {
                console.log('This is the ERR: ', err);
            })
    });
});
