/**
 * Get all photos
 */

Nakama.Photos = function(options, callback) {
	var _this   = this,
		length  = arguments.length,
		options = (options || {});

	//Check to see if photo ID was supplied
	if(!options.uid) {
		Nakama.Debug("Please supply a user ID.");
		return;
	}

	var deferred = Q.defer();

	Nakama.Ajax({url: Nakama.Config.url + '/photo/list/' + options.uid}, function(res) {
		if(length === 2) {
			if(typeof callback === "function") callback(res.responseText);
		}

		else {
			deferred.resolve(res.responseText);
		}
	});

	return deferred.promise;
};
