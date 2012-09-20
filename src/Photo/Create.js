/**
 * Create new photo
 */

Nakama.Photo.create = function(options, callback) {
	var _this   = this,
		length  = arguments.length,
		options = (options      || {}),
		data    = (options.data || {});

	var deferred = Q.defer();

	Nakama.Ajax({
		data: data,
		type: "POST",
		url: Nakama.Config.url + '/photo/add/' + options.uid
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
