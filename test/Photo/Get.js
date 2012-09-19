var Nakama  = require('../../nakama')

describe('Photo', function() {
	describe('Get', function() {
		it('Should be able to get a photo by ID', function(done) {
			var photo = new Nakama.Photo({id: 23}, function(photo, err) {
				if(!photo) {
					console.log("This is a test error");
					console.log(err);
				}
				done();
			});
		});
	});
});