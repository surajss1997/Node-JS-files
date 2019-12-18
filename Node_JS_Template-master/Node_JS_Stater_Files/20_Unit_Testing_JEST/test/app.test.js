const app = require('../app');
const util = require('../util/utility');

describe('app.js', function () {

    describe('greet() function', function () {
        // test case 1
        test('expect to return a Hello String', () => {
            expect(app.greet()).toBe('Hello');
        });

        // test case 2
        test('expect not to return a hello String', () => {
            expect(app.greet()).not.toBe('hello');
        });
    });

    describe('sum() function', function () {
        // test case 1
        test('expect to return 30 for 10 , 20' , () => {
            expect(app.sum(10,20)).toBe(30);
        });

        // test case 2
        test('Expect the result to be greater than 40 for 20 , 30' , () => {
            expect(app.sum(20,30)).toBeGreaterThan(40);
        });

        // test case 3
        test('Expect the result to be greater than 40 for 10 , 30' , () => {
            expect(app.sum(10,30)).toBeLessThanOrEqual(40);
        });
    });

    describe('createStudent() function', function () {

        // test case 1
        test('expect a student object',() => {
            expect(app.createStudent()).toStrictEqual({name : 'Rajan' , course : 'CSE' , age : 20 })
        });

    });

    describe('getColors() function', function () {

        // test case 1
        test('expect a colors array' , () => {
            let colors = ['red' , 'green' , 'blue' , 'yellow'];
            expect(app.getColors()).toStrictEqual(colors);
        });

        // test case 2
        test('expect to contain green in the array', () => {
            expect(app.getColors()).toContain('green');
        });

        // test case 3
        test('expect the array of length 4', () => {
            expect(app.getColors().length).toBe(4);
        });
    });

});
