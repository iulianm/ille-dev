const requireLogin = require('../middlewares/requireLogin');
const validateFields = require('../middlewares/validateFields');
const mongoose = require('mongoose');
const Phrase = mongoose.model('phrase');
module.exports = (app, passport) => {

    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    // =============================================================================
    // AUTHENTICATE (FIRST LOGIN) ==================================================
    // =============================================================================

    // HOME PAGE (with login links) ========

    // app.get('/', (req, res) => {
    //     console.log('Inside the homepage callback function');
    //     console.log(req.sessionID);
    //     res.render('index.ejs'); // load the index.ejs file
    // })

    // LOCAL LOGIN ===============================

    // show the login form
    // app.get('/login', (req, res) => {
    //     // render the page and pass in any flash data if it exists
    //     res.render('login.ejs', { message: req.flash('loginMessage') });
    // })

    // app.post('/login', (req, res, next) => {
    //     console.log('Inside POST LOCAL login callback')
    //     passport.authenticate('local-login', (err, user, info) => {
    //         console.log('Inside POST LOCAL Login PASSPORT AUTH callback');
    //         // console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
    //         // console.log(`req.user: ${JSON.stringify(req.user)}`)
    //         if (info) { return res.send(info.message) }
    //         if (err) { return next(err); }
    //         if (!user) { return res.redirect('/login'); }
    //         req.login(user, (err) => {
    //             console.log('Inside POST LOCAL login req.login() callback', user);
    //             // console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
    //             // console.log(`req.user: ${JSON.stringify(req.user)}`);
    //             if (err) { return next(err); }
    //             console.log('You were authenticated & logged in!\n');
    //             return res.redirect('/profile');
    //         })
    //     })(req, res, next);
    // });

    // process the login form
    app.post('/auth/local-login', (req, res, next) => {
        passport.authenticate('local-login', (err, user, info) => {
            if (info) { return res.send(info.message) }
            //   console.log('The INFO message is: ', info.message);
            if (err) { return next(err); }
            if (!user) { return res.redirect('/'); }
            req.login(user, (err) => {
                if (err) { return next(err); }
                localStorage.setItem('userAuth', 'true');
                console.log(localStorage.getItem('userAuth'));
                return res.redirect('/dashboard');
            })
        })(req, res, next)
    })

    // app.get('/api/server/user', (req, res) => {
    //     res.send(localStorage.getItem('userAuth'));
    // });

    // app.post(
    //     '/auth/local-login',
    //     passport.authenticate('local-login',
    //         {
    //             successRedirect: '/profile', // redirect to the secure profile section       
    //             failureRedirect: '/', // redirect back to the signup page if there is an error
    //             failureFlash: true // allow flash messages
    //         }));

    // LOCAL SIGNUP ==============================

    // show the signup form
    // app.get('/signup', (req, res) => {
    //     console.log('Inside GET /sign up callback')
    //     // render the page and pass in any flash data if it exists
    //     // req.flash -> is the connect-flash way of getting flashdata in the session
    //     res.render('signup.ejs', { message: req.flash('signupMessage') });
    // });

    //process the signup form-- > take more control over error handling
    // app.post('/signup', (req, res, next) => {
    //     console.log('Inside POST /sign up callback')
    //     passport.authenticate('local-signup', (err, user, info) => {
    //         if (info) { return res.send(info.message) }
    //         if (err) { return next(err); }
    //         if (!user) { return res.redirect('/signup'); }
    //         req.login(user, (err) => {
    //             if (err) { return next(err); }
    //             return res.redirect('/profile');
    //         })
    //     })(req, res, next);
    // });

    // process the signup form
    app.post(
        '/auth/local-signup',
        passport.authenticate('local-signup',
            {
                successRedirect: '/profile', // redirect to the secure profile section
                failureRedirect: '/', // redirect back to the signup page if there is an error
                failureFlash: true // allow flash messages
            }));

    // GOOGLE LOGIN ========================

    app.get(
        '/auth/google',
        passport.authenticate('google',
            {
                scope: ['profile', 'email']
            }));

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard');
            //failureRedirect: '/'
        });

    app.get('/api/logout', (req, res) => {
        console.log('NOW we LOGOUT');
        localStorage.setItem('userAuth', 'false');
        req.logout();
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

    // =============================================================================
    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
    // =============================================================================

    // LOCAL LOGIN ===============================

    // app.get('/connect/local', (req, res) => {
    //     res.render('connect-local.ejs', { message: req.flash('signupMessage') });
    // })

    app.post('/auth/connect/local', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/connect/local', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // GOOGLE ====================================

    app.get('/auth/connect/google', passport.authorize('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/connect/google/callback', passport.authorize('google', {
        successRedirect: '/profile',
        failureRedirect: '/'
    }));

    // =============================================================================
    // UNLINK ACCOUNTS =============================================================
    // =============================================================================
    // used to unlink accounts. for social accounts, just remove the token
    // for local account, remove email and password
    // user account will stay active in case they want to reconnect in the future

    // LOCAL ====================================

    app.get('/auth/unlink/local', requireLogin, (req, res) => {
        var user = req.user;
        //user.local.email = '';
        user.local.password = '';
        user.save(function (err) {
            console.log('UNLINK LOCAL -> The ERROR IS: ', err);
        })
        if (user.google.token !== undefined) {
            console.log('The user HAS also a GOOGLE account');
            res.redirect('/profile');
        } else {
            console.log('The user DOES NOT HAVE also a GOOGLE account');
            res.redirect('/api/logout');
        }
    });

    // GOOGLE ====================================

    app.get('/auth/unlink/google', requireLogin, (req, res) => {
        var user = req.user;
        user.google.token = '';
        user.save(function (err) {
            console.log('UNLINK GOOGLE -> The ERROR IS: ', err);
        });
        if (user.local.password !== '') {
            console.log('The user HAS also a LOCAL account');
            res.redirect('/profile');
        } else {
            console.log('The user DOES NOT HAVE also a LOCAL account');
            res.redirect('/api/logout');
        }
    });
};