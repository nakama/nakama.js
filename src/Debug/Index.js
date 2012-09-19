/**
 * Debug Class - shows debug messages if config sets them to true
 */
Nakama.Debug = function(msg) {
	if(this.Config.debug === true) console.log("Nakama.js Error: " + msg);
};
