// Import dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Check Out Book", () => {
    describe("GET /", () => {
        // Test to get a book record
        it("should check out a book", (done) => {
             chai.request(app)
                 .get('/checkOut?employeeID=1&phone_number=1111111112&email_address=test2@gmail.com')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         it("should not check out a book", (done) => {
            chai.request(app)
                .get('/checkOut?employeeID=undefined&phone_number=1111111111&email_address=test@gmail.com')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object').and.be.empty;
                    done();
                 });
        });
    });
});