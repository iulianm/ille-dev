const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const flash = require('connect-flash');
const morgan = require('morgan');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
//const fileStore = require('session-file-store')(session);
const sessionstore = require('sessionstore');
require('./models/user');
// require('./models/grammar_structures/Paragraph');
require('./models/grammar_structures/Phrase');
require('./models/grammar_structures/Sentence');
require('./models/grammar_structures/Expression');
require('./models/grammar_structures/Word');
require('./models/grammar_structures/Punctuation');
require('./models/grammar_structures/WordVocabulary');
require('./services/passport');

const app = express();

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
require('./services/passport')(passport);

app.set('view engine', 'ejs'); // set up ejs for templating

//Add & configure middleware
app.use(bodyParser.urlencoded({ extended: true })) // URL-encoded will be parsed wih qs library (allows to create a nested obj from your query string -> will not filter out ? from the query string)
app.use(bodyParser.json()); // express does not know how to read the json from the request object (the payload)(or the incoming request bodies) so it needs this bodyParser.json() -> the info will be assigned to the req.body property of the incoming req object
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

app.use(session({
    // store: new fileStore(),
    store: sessionstore.createSessionStore({
        type: 'mongodb',
        dbName: 'grano-dev',
        collectionName: 'sessions',
        timeout: 10000,
        url: keys.mongoURI
    }),
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days, expresses in millsec
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Attach the authentication routes to the express app
require('./routes/authRoutes')(app, passport);
require('./routes/grammarRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like our main.js file or main.css file
    app.use(express.static('client/build'));

    // Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);