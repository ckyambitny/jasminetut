define(['numbers'], function (numbers) {
    'use strict';

    describe('Numbers module', function () {
        describe('The add method', function () {
            // xit -same as pending(); , xdescribe - 0 specs
            it('accepts one or more args and returns sum of them', function () {
                /*pending(); */ //marks spec as pending!

                // arrange
                var output,
                    input1 = 1,
                    input2 = 2;
                // act
                output = numbers.add(input1, input2);
                // assert using matchers
                expect(output).toEqual(3);
                expect(output).not.toEqual(4);

            });

            it()
        });
    });
});
