// Import dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Create User", () => {
    describe("GET /", () => {
        // Test to get a book record
        it("should create a user record", (done) => {
             chai.request(app)
                 .get('/checkOut?employeeID=1&phone_number=1111111112&email_address=test2@gmail.com')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         it("should not create a user record", (done) => {
            chai.request(app)
                .get('/users?employeeID=undefined&phone_number=1111111111&email_address=test@gmail.com')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object').and.be.empty;
                    done();
                 });
        });
    });
});