'use strict';

module.exports = function (Roommate) {
	Roommate.setColloc = function(id, collocId, cb) {
		Roommate.findById(id, function(err, user) {
			if (err) cb(err);
			user.colloc = collocId;
			user.save();
			return cb(null, user);
		});
	}
};

