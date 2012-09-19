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
