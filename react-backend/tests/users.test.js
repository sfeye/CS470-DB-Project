// Import dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Users", () => {
    describe("GET /", () => {
        // Test to get a book record
        it("should get a user record", (done) => {
             chai.request(app)
                 .get('/users?employeeID=1&phone_number=1111111111&email_address=test@gmail.com')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         it("should not get a user record", (done) => {
            chai.request(app)
                .get('/users?employeeID=2&phone_number=1111111111&email_address=test@gmail.com')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object').and.be.empty;
                    done();
                 });
        });
    });
});