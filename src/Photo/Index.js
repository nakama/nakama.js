/**
 * Photo Instance
 */

Nakama.Photo = function(config, callback) {
	var _this = this,
		length = arguments.length;
	config = (config || {});

	//Check to see if photo ID was supplied
	if(!config.uid) {
		Nakama.Debug("Please supply a photo ID.");
		return;
	}

	var deferred = Q.defer();

	Nakama.Ajax({url: Nakama.Config.url + '/photo/list/' + config.uid}, function(res) {
		if(length === 2) {
			if(typeof callback === "function") callback(res.responseText);
		}

		else {
			deferred.resolve(res.responseText);
		}
	});	

	//Get the photo object
	/*Nakama.Ajax(Nakama.Config.url + '/photo/list/' + config.id, function(body, err) {
		console.log("does this even fire?")

		if(arguments.length == 2) {console.log("hit")
			if(typeof callback === "function") callback(body, err);
		}

		else {
			console.log("hit")
			deferred.resolve(body);
			console.log(deferred.resolve(body));
		}
	});*/

	/*var onRequest = function (error, response, body) {
		console.log('i fire')
		if(typeof callback === "function") callback(body, error);
		deferred.resolve(body);
		console.log("deferred body")
		console.log(deferred.resolve(body));
	}

	console.log("lets try again")
	//console.log(deferred.promise)
	/*return Q.when(deferred.promise, function(value) {
		console.log("value")
		console.log(value)
		return value;
	});*/
	//return deferred.promise;

	return deferred.promise;
};
