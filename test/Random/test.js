var fs      = require('fs'),
	Nakama  = require('../../nakama'),
	Q       = require('Q')

describe('just a simple test', function() {
	it('should get contents of file', function(done) {

		var read = function() {
		    var deferred = Q.defer();
			fs.readFile(__dirname + "/foo.txt", "utf-8", function (error, text) {
			    if (error) {
			        deferred.reject(new Error(error));
			    } else {
			        deferred.resolve(text);
			    }
			});
			return deferred.promise;
		}

		var iwill = new read();
		iwill.then(function(text) {
			done();
			console.log(text)
		});
	});

	it('should work with ajax', function(done) {
		
		var read = function() {
			var deferred = Q.defer();

			if(typeof window === "undefined") {
				var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
			}

			var xmlhttp = new XMLHttpRequest();

			xmlhttp.onreadystatechange = function() {
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					deferred.resolve(xmlhttp.responseText);
				}
			}
			xmlhttp.open("GET", Nakama.Config.url + '/photo/list/23', true);
			xmlhttp.send();

			return deferred.promise;
		};

		var iwill = new read();
		iwill.then(function(text) {
			done();
			console.log(text)
		});
	});

	it('should work with ajax function', function(done) {
		var ajax = function(callback) {
			if(typeof window === "undefined") {
				var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
			}

			var xmlhttp = new XMLHttpRequest();

			xmlhttp.onreadystatechange = function() {
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					callback(xmlhttp);
				}
			}
			xmlhttp.open("GET", Nakama.Config.url + '/photo/list/23', true);
			xmlhttp.send();
		};

		var read = function() {
			var deferred = Q.defer();

			ajax(function(xmlhttp) {
				deferred.resolve(xmlhttp.responseText);
			});

			return deferred.promise;
		};

		var iwill = new read();
		iwill.then(function(text) {
			done();
			console.log(text)
		});
	});

	it('should work with Nakma ajax function', function(done) {
		var read = function() {
			var deferred = Q.defer();

			Nakama.Ajax({url: Nakama.Config.url + '/photo/list/23'}, function(xmlhttp) {
				deferred.resolve(xmlhttp.responseText);
			});

			return deferred.promise;
		};

		var iwill = new read();
		iwill.then(function(text) {
			done();
			console.log(text)
		});
	});
});