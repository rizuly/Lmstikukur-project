const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('knex')(require('./db').db);
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(14);

passport.use(
	'local',
	new LocalStrategy(async (username, password, done) => {
		try {
			console.log('xxxx');
			let user = await db('t_user')
				.where('username', username.toLowerCase())
				.select('id', 'password', 'username');

			if (user.length === 0) {
				return done(null, false, { message: 'Unregistered user' });
			}

			user = user[0];
			let compare = bcrypt.compareSync(password, user.password);

			if (!compare) {
				return done(null, false, { message: 'Wrong password' });
			}

			return done(null, user);
		} catch (error) {
			return done(null, false, error);
		}
	})
);

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(async (user, done) => {
	let userdata = await db('t_user')
		.where('id', user.id)
		.select('id', 'username', 'first_name', 'last_name')
		.first();
	done(null, userdata);
});
