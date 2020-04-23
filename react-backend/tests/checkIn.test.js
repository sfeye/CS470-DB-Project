// Import dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Check In Book", () => {
    describe("GET /", () => {
        // Test to get a book record
        it("should check in a user's book", (done) => {
             chai.request(app)
                 .get('/checkIn?employeeID=1&ISBN=1234567890')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         it("should not check in a user's book (book doesn't exist)", (done) => {
            chai.request(app)
                .get('/checkIn?employeeID=1&ISBN=2234567890')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object').and.be.empty;
                    done();
                 });
        });
    });
});