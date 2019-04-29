module.exports = (req, res, next) => {
    if (!req.user) {
        // console.log('MIDDLEWARE we will now send a 401!');
        //  return res.status(401).send({ error: 'You must log in!' });
        console.log('MIDDLEWARE we will now redirect to LANDING');
        return res.redirect('/');
    }
    next();
};