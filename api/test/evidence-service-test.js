var assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require("../app");

var envPath = __dirname + "/../.env.debug"
require('dotenv').config({path:envPath})

chai.use(chaiHttp);
chai.should();

// getInitialUserList


describe('evidenceServices', function() {
  describe('search title', function() {
     it("should match title", (done) => {
      chai.request(app)
          .get('/api/v1/evidences/search')
          .query({
            query: JSON.stringify({op:"$and",queries:[{op:"$match",field:"title",value:"devops"}]}),
          })
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.should.be.lengthOf(1);
           });
      done();
    });  
  });
});

describe('evidenceServices', function() {
  describe('search date', function() {
     it("should match date range", (done) => {
      chai.request(app)
          .get('/api/v1/evidences/search')
          .query({
            query: JSON.stringify({
              op:"$and",
              queries:[
                {
                  op:"$ge",
                  field:"date",
                  value: new Date('2019-01-01')
                },
                {
                  op:"$le",
                  field:"date",
                  value: new Date('2019-12-31')
                }
              ]
            }),
          })
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.should.be.lengthOf(1);
           });
      done();
    });  
  });
});

describe('evidenceServices', function() {
  describe('search date', function() {
     it("should match date range", (done) => {
      chai.request(app)
          .get('/api/v1/evidences/search')
          .query({
            query: JSON.stringify({
              op:"$and",
              queries:[
                {
                  op: '$and',
                  queries: [
                    {
                      op:"$ge",
                      field:"date",
                      value: new Date('2017-01-01')
                    },
                    {
                      op:"$le",
                      field:"date",
                      value: new Date('2019-12-31')
                    }
                  ]
                },
                {
                  op: '$eq',
                  field: 'method',
                  value: 'agile'
                }
              ]
            }),
          })
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.should.be.lengthOf(3);
           });
      done();
    });  
  });
});
