module.exports = (req, res, next) => {
    if (!req.body.email === '') {
        console.log('MIDDLEWARE validateFields will now send an erros message');
        return res.send({ error: 'You must log in!' });
        // console.log('MIDDLEWARE we will now redirect to LANDING');
        // return res.redirect('/');
    }
    next();
};