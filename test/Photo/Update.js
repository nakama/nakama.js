var Nakama  = require('../../nakama'),
	Q       = require('q')

describe('Photo', function() {
	describe('Get - async', function() {
		it('Should be able to get a photo by ID', function(done) {
			Nakama.Photo({uid: 23}, function(photo, err) {
				if(!photo) {
					console.log("This is a test error");
					console.log(err);
				}
				console.log("photo");
				console.log(photo)
				photo.update({

				});
				done();
			});
		});
	});

	describe('Get - deferred', function() {
		it('Should be able to get a photo by ID', function(done) {
			var getPhoto = new Nakama.Photo({uid: 23});
			if(!getPhoto) {
				console.log("This is a test error");
				console.log(err);
			}

			getPhoto.then(function(photo) {
				console.log("photo")
				console.log(photo);
				photo.update({
					
				});
				done();
			});
		});
	});
});