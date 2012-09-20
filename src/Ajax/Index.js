Nakama.Ajax = function(options, callback) {

	if(typeof window === "undefined") {
		var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	}

	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			if(typeof callback === "function") callback(xmlhttp);
		}
	}
	xmlhttp.open("GET", options.url, true);
	xmlhttp.send();
};
