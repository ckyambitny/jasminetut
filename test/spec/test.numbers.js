define([
    'numbers'
], function (numbers) {
    'use strict';

    describe('Numbers module', function () {
        describe('The add method', function () {
            it('accepts one or more args and returns sum of them', function () {
                // arrange
                var output;
                var input1 = 1;
                var input2 = 2;

                // act
                output = numbers.add(input1, input2);

                // assert using matchers
                expect(output).toEqual(3);
                expect(output).not.toEqual(4);
            });

            it('should add two values', function () {
                expect(numbers.add(1, 2)).toEqual(3);
                expect(numbers.add(1, 0)).toEqual(1);
                expect(numbers.add(0, 0)).toEqual(0);
                expect(numbers.add(-10, 0)).toEqual(-10);
                expect(numbers.add(-10, 20)).toEqual(10);
            });

            it('should add many values', function () {
                expect(numbers.add(1)).toEqual(1);
                expect(numbers.add(0)).toEqual(0);
                expect(numbers.add(0, 0, 0, 0, 0, 0, 0, 0, 0)).toEqual(0);
                expect(numbers.add(0, 0, 0, 0, 0, 10, 0, 0, 0)).toEqual(10);
            });
        });
    });
});
