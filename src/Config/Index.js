Nakama.Config = function(config) {
	config = (config || {});

	this.debug = (config.debug || false);
	this.url   = (config.url   || 'http://107.20.202.100:8080/nakama');
};

//Had to drop this in here - not sure why it doesn't work up there
Nakama.Config.url = 'http://107.20.202.100:8080/nakama';