/**
 * @param config {Object} Configuration for the app
 * @param config.apiKey {String} The API Key for the app
 * @param config.apiSecret {String} The API Secret for the app
 * @param config.debug {boolean}
 */

Nakama.App = function(config) {
	Nakama.Config(config); //Pass the app configuration to the configuration class
};
