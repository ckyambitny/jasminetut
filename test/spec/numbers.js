define(['numbers'], function (numbers) {
	'use strict';
	describe('Numbers module', function () {
		describe('The add method', function () {
			// xit -same as pending(); , xdescribe - 0 specs
			var output;

			beforeEach(function () {
				this.numberInput1 = 1,
				this.numberInput2 = 2,
				this.stringInput1 = '2',
				this.stringInput2 = 'napewnonieparsowalnystring';
			});

			it('accepts one or more args and returns sum of them', function () {
				/*pending(); */ //marks spec as pending!
				
				// arrange moved to beforeEach
				
				// act
				output = numbers.add(this.numberInput1, this.numberInput2);
				// assert using matchers
				expect(output).toEqual(3);
				expect(output).not.toEqual(4);

			});

			it('should parse int when string is passed as argument', function () {

				output = numbers.add(this.numberInput1, this.stringInput1);
				expect(output).toEqual(3);
			});

			it('should ignore the argument if it is not parseable', function () {
				output = numbers.add(this.numberInput1, this.stringInput2);
				expect(output).toEqual(1);
			})


		});

	});



});