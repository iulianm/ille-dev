const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const bcrypt = require('bcrypt-nodejs');
const User = mongoose.model('user');

module.exports = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id).then(user => {
            done(null, user);
        })
    });

    //GOOGLE-LOGIN strategy
    passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        passReqToCallback: true, // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        proxy: true // tell google to trust the proxy of heroku and not drop the s from https
    }, async (req, accessToken, refreshToken, profile, done) => {

        if (!req.user) {
            console.log('Are we here 1 ?!?!?!?!?!');
            const existingUser = await User.findOne({ 'google.id': profile.id });
            if (existingUser) {
                console.log('Are we here 2 ?!?!?!?!?!');
                console.log('EXISTING USER 111 without TOKEN --->>>', existingUser);
                // if there is a user id already but no token (user was linked at one point and then removed)
                // just add our token and profile information
                if (existingUser.google.token == '') {
                    console.log('Are we here 3 ?!?!?!?!?!');
                    console.log('ACCESS TOKEN is --->>>', accessToken);
                    console.log('EXISTING USER GOOGLE TOKEN is --->>>', existingUser.google.token);
                    console.log('EXISTING USER GOOGLE is --->>>', existingUser.google);

                    existingUser.google.token = accessToken;
                    console.log('EXISTING USER BEFORE SAVE --->>>', existingUser);
                    existingUser.google.email = profile.emails[0].value;
                    existingUser.google.firstName = profile.name.givenName;
                    existingUser.google.lastName = profile.name.familyName;
                    existingUser.save()
                    console.log('EXISTING USER 222 afer TOKEN --->>>', existingUser);
                    return done(null, existingUser);
                }
                return done(null, existingUser);
            }
            const user = await new User({
                'google.id': profile.id,
                'google.token': accessToken,
                'google.email': profile.emails[0].value,
                'google.firstName': profile.name.givenName,
                'google.lastName': profile.name.familyName,
                'google.joinDate': new Date()
            }).save();
            done(null, user);
        }
        // user already exists and is logged in, we have to link accounts
        let user = req.user; // pull the user out of the session

        // update the current users google credentials
        user.google.id = profile.id;
        user.google.token = accessToken;
        user.google.email = profile.emails[0].value;
        user.google.firstName = profile.name.givenName;
        user.google.lastName = profile.name.familyName;

        // save the user
        user.save()
        done(null, user);
    }))


    //LOCAL-LOGIN strategy
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback       
    }, async (req, email, password, done) => { // callback with email and password from our form
        const existingUser = await User.findOne({ 'local.email': email })
        if (!existingUser) {
            return done(null, false, req.flash('loginMessage', 'No user found.'));
        }

        if (existingUser.local.password === '') {
            console.log('!!!This user was previously unlinked. Please confirm this user and setup a new password');
            return done(null, false, req.flash('loginMessage', 'This user was previously unlinked. Please confirm this user and setup a new password'));
        }
        // if the user is found but the password is wrong
        if (!validPassword(password, existingUser.local.password)) {
            return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
        }
        // create the loginMessage and save it to session as flashdata
        // all is well, return successful user
        return done(null, existingUser);
    }));


    // LOCAL-SIGNUP strategy
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, async (req, email, password, done) => {
        const existingUser = await User.findOne({ 'local.email': email })
        if (existingUser) {
            return done(null, false, req.flash('signupMessage', 'This email is already taken.'));
        }
        const user = await new User({
            'local.email': email,
            'local.password': generateHash(password),
            'local.firstName': req.body.firstName,
            'local.lastName': req.body.lastName,
            'local.location': req.body.location,
            'local.languageLevel': req.body.languageLevel,
            'local.vocabularyOfInterest': req.body.vocabularyOfInterest,
            'local.joinDate': new Date()
        }).save()
        done(null, user)
    }));
}

// generating a hash
function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
function validPassword(password, crypt_password) {
    return bcrypt.compareSync(password, crypt_password);
};

