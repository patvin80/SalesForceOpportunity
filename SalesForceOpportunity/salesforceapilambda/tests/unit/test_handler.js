'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;


describe('Tests index', function () {
    it('verifies successful Lambda Execution', async () => {
        const result = await app.lambda_handler(event, context, (err, result) => {
            // expect(result).to.be.an('object');
            // expect(result.statusCode).to.equal(200);
            // expect(result.body).to.be.an('string');
            console.log(result);
            //let response = JSON.parse(result);

            // expect(response).to.be.an('object');
            // expect(response.message).to.be.equal("hello world");
            // expect(response.location).to.be.an("string");
        });
    });
});

// describe("Login Test", function() {
//     it('verifies successful login', () => {
//         const result = app.loginSalesForce().then((data) => {console.log("Printing data", data)});
//         console.log("Printing Result",result);
//     });
// });

// describe("Login Test Small", function() {
//     it('verifies successful login', () => {
//         const result = app.loginWithPromise().then((data) => {console.log("Printing data", data)});
//         console.log("Printing Result",result);
//     });
// });

// describe("Async Login Test", () => {
//     it('verifies successful async login', async () => {
//         const result = await app.loginData();
//         console.log("Printing Result",result);
//     });
// });
