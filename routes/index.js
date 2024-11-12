const express = require('express');
const router = express.Router();
const passport = require('passport');
const createError = require('http-errors');

const menu = [
	{
		page: 'welcome',
		title: 'Welcome',
		app: 'app-welcome',
	},
	{
		page: 'customer',
		tittle: 'Customer',
		app: 'app-customer'
	},
	{
		page: 'murid',
		tittle: 'murid',
		app: 'app-murid'
	},
	{
		page: 'detailsiswa',
		tittle: 'detailsiswa',
		app: 'app-detailsiswa'
	},
	{

		page: 'guru',
		tittle: 'guru',
		app: 'app-guru'
	},

];

function ensureAuth(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.redirect('/');
	}
}

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Express',
		message: req.flash('error'),
	});
});

router.post(
	'/login',
	passport.authenticate('local', {
		successRedirect: '/welcome',
		failureRedirect: '/',
		failureFlash: true,
	})
);

router.get('/logout', function (req, res) {
	req.session = null;
	res.redirect('/');
});

router.get('/:page', ensureAuth, (req, res, next) => {
	let check = menu.filter((o) => o.page === req.params.page);
	if (check.length === 0) {
		next(createError(404));
	} else {
		res.render('default', {
			content: check[0],
			menu,
			...check[0],
			user: req.user,
		});
	}
});

module.exports = router;
