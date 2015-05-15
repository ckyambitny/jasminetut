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
            it('should try to parse string argument to float, otherwise assume value of 0', function () {
                expect(numbers.add('2.4', 0,0,'1.1')).toEqual(3.5);
                expect(numbers.add('yolo', 0,0,'0.00003', 'napewnoniefloat',7,'0')).toEqual(7.00003);
                expect(numbers.add('2.4i string', 0,0)).toEqual(2.4);
                expect(numbers.add(0.11, 0.2)).toEqual(0.31);
            });
            it('should throw an error if arguments are not a number type', function () {
                expect( function() { numbers.add([6,7]); } ).toThrow( new Error('Not a number') );
                expect( function() { numbers.add( new Date(), 'bolek' ); } ).toThrow( new Error('Not a number') );
                expect( function() { numbers.add( { jan:'jan', wiek: 67} ); } ).toThrow( new Error('Not a number') );
            });
            
        });
        describe('The getPrecision method', function () {
            it('should get the float precision from argument', function () {
                expect(numbers.getPrecision(0.00004)).toEqual(5);
                expect(numbers.getPrecision(1.5555556)).toEqual(7);  
            });
            it('should throw an error if argument is not a number type', function () {
                expect( function() { numbers.getPrecision('baba'); } ).toThrow( new Error('Not a number argument') );
                expect( function() { numbers.getPrecision( new Date() ); } ).toThrow( new Error('Not a number argument') );
                expect( function() { numbers.getPrecision( { name :'jan', age : 55  }); } ).toThrow( new Error('Not a number argument') );
                expect( function() { numbers.getPrecision( [7,3] ); } ).toThrow( new Error('Not a number argument') );
            });
        });
        describe('A spy', function () {
            // how to write a test that spys  parseInput method?
            it('should invoke parseInput method and parse the input', function () {
                spyOn(numbers, 'parseInput');
                numbers.add('2.4i string', 0, 0);
                expect(numbers.parseInput).toHaveBeenCalled();

            });
        });
    });
});
