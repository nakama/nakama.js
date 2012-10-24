/**
 * Update a photo
 */

Nakama.Photo.prototype.update = function(options, callback) {
	var _this   = this,
		length  = arguments.length,
		options = (options      || {}),
		data    = (options.data || {});

	//Check to see if photo ID was supplied
	if(!options.uid) {
		Nakama.Debug("Please supply a photo ID.");
		return;
	}

	var deferred = Q.defer();

	Nakama.Ajax({
		data: data,
		type: "POST",
		url: Nakama.Config.url + '/photo/update/' + options.uid
	}, function(res) {
		if(length === 2) {
			if(typeof callback === "function") callback(res.responseText);
		}

		else {
			deferred.resolve(res.responseText);
		}
	});

	return deferred.promise;
};
