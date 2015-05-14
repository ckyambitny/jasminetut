define( function () {
	'use strict';
	var self = {};


	self.add = function add () {
		var inputs = Array.prototype.slice.call(arguments),
			total = 0;

		inputs.forEach(function (value) {
			if ( typeof value === 'string') {
				value = parseInt(value, 10) || 0;
			};
			total += value;
		});
		
		return total;
	}

	return self;
});