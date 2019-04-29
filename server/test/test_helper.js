const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;

before(done => {
    mongoose.connect(keys.mongoURI);
    mongoose.connection
        .once('open', () => {
            console.log('Connection to DB is OK');
            done();
        })
        .on('error', error => {
            console.warn('Mongoose CONNECTION Warning', error);
        });
});

beforeEach(done => {
    const { paragraphs, phrases, sentences, expressions, words, punctuations } = mongoose.connection.collections;
    paragraphs.drop(() => {
        console.log('We Dropped the Paragraph!!')
        phrases.drop(() => {
            sentences.drop(() => {
                expressions.drop(() => {
                    words.drop(() => {
                        punctuations.drop(() => {
                            done();
                        });
                    });
                });
            });
        });
    });
});
