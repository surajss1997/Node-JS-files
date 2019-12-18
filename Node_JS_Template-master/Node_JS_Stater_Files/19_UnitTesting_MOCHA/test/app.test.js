let app = require('../app');
let assert = require('chai').assert;

describe('app.js', function () {
    describe('greet() function', function () {

        let result = app.greet();
        // test case 1
        it('should return the string Hello', function () {
            assert.equal(result, "Hello");
        });

        // test case 2
        it('should return a Type String', function () {
            assert.typeOf(result, 'string');
        });
        
        // test case 3
        it('should return a string with length 5', function () {
            assert.strictEqual(result.length , 5);
        });
    });

    describe('reverseString() Function', function () {

        // test case 1
        it('should return the reverse String', function () {
            assert.equal(app.reverseString('Hello'),'olleH');
        });

        // test case 2
        it('should not return the same string', function () {
            assert.notEqual(app.reverseString('Hello'),'Hello');
        });

        // test case 3
        it('should return the same length', function () {
            let msg = 'Hello';
            assert.equal(app.reverseString(msg).length , msg.length);
        });

    });
});