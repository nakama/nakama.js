Nakama.Ajax = function(options, callback) {

	var async  = (options.async || true),
		data   = (options.data || {}),
		params = null,
		type   = (options.type || "GET"),
		url    = (options.url);

	if(typeof window === "undefined") {
		var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	}

	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			if(typeof callback === "function") callback(xmlhttp);
		}
	}

	xmlhttp.open(type, url, async);
	if(type === "POST") {
		xmlhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
		data = JSON.stringify(data);
	}
	xmlhttp.send(data);
};
