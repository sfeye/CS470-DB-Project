// Import dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Books", () => {
    describe("GET /", () => {
        // Test to get a book record
        it("should get a book record from ISBN", (done) => {
             chai.request(app)
                 .get('/book?ISBN=1234567890')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                  });
         });
         it("should get a book record from author", (done) => {
            chai.request(app)
                .get('/book?author=Shelley')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                 });
        });
        it("should get a book record from title", (done) => {
            chai.request(app)
                .get('/book?title=Frankenstein')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                 });
        });
        it("should not return a book", (done) => {
            chai.request(app)
                .get('/book?author=AAAAAAAAAA')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.not.be.a('object').and.be.empty;
                    done();
                 });
        });
    });
});

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