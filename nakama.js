var Nakama = {};

Nakama.version = "0.0.1";

exports = module.exports = Nakama;
Nakama.Ajax = function(path, callback) {

	//Make ajax request in browser
	if(typeof window !== "undefined" && window.XMLHttpRequest) {
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				if(typeof callback === "function") callback(xmlhttp);
			}
		}
		xmlhttp.open("GET", path, true);
		xmlhttp.send();
	}

	//Make ajax call in node
	else {
		var request = require('request');
console.log(path)
		request({uri: path}, function (error, response, body) {
			if(typeof callback === "function") callback(body, error);
		});
	}
};

Nakama.Config = function(config) {
	config = (config || {});

	this.debug = (config.debug || false);
	this.url   = (config.url   || 'http://107.20.202.100:8080/nakama');
};

//Had to drop this in here - not sure why it doesn't work up there
Nakama.Config.url = 'http://107.20.202.100:8080/nakama';
/**
 * Debug Class - shows debug messages if config sets them to true
 */
Nakama.Debug = function(msg) {
	if(this.Config.debug === true) console.log("Nakama.js Error: " + msg);
};

/**
 * @param config {Object} Configuration for the app
 * @param config.apiKey {String} The API Key for the app
 * @param config.apiSecret {String} The API Secret for the app
 * @param config.debug {boolean}
 */

Nakama.App = function(config) {
	Nakama.Config(config); //Pass the app configuration to the configuration class
};

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
