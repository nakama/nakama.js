var Nakama  = require('../../nakama'),
	Q       = require('q')

describe('Photo', function() {
	describe('Get - async', function() {
		it('Should be able to get all photos by user ID', function(done) {
			Nakama.Photos({uid: 23}, function(photos, err) {
				if(!photos) {
					console.log("This is a test error");
					console.log(err);
				}
				console.log("photos");
				console.log(photos)
				done();
			});
		});
	});

	describe('Get - deferred', function() {
		it('Should be able to get all photos by user ID', function(done) {
			var getPhotos = new Nakama.Photos({uid: 23});
			if(!getPhotos) {
				console.log("This is a test error");
				console.log(err);
			}

			getPhotos.then(function(photos) {
				console.log("photo")
				console.log(photos);
				done();
			});
		});
	});
});