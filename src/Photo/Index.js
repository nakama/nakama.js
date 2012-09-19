/**
 * Photo Instance
 */

Nakama.Photo = function(config, callback) {
	var _this = this;
	config = (config || {});

	//Check to see if photo ID was supplied
	if(!config.id) {
		_this.Debug("Please supply a photo ID.");
		return;
	}

	//Get the photo object
	Nakama.Ajax(Nakama.Config.url + '/photo/list/' + config.id, function(body, err) {
		if(arguments.length == 2) {
			if(typeof callback === "function") callback(body, err);
		}
	});
};
