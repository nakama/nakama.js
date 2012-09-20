var Nakama  = require('../../nakama'),
	Q       = require('q')

describe('Photo', function() {
	describe('Create - async', function() {
		it('Should be able to cretae a photo', function(done) {
			Nakama.Photo.create({
				data: {

				},
				uid: 23
			}, function(photo, err) {
				if(!photo) {
					console.log("This is a test error");
					console.log(err);
				}
				console.log("photo");
				console.log(photo)
				done();
			});
		});
	});

	describe('Get - deferred', function() {
		it('Should be able to create a photo', function(done) {
			var getPhoto = new Nakama.Photo.create({
				data: {

				},
				uid: 23
			});
			if(!getPhoto) {
				console.log("This is a test error");
				console.log(err);
			}

			getPhoto.then(function(photo) {
				console.log("photo")
				console.log(photo);
				done();
			});
		});
	});
});