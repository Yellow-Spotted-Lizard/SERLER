var assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiThings = require('chai-things');
const app = require("../app");

var envPath = __dirname + "/../.env.debug"
require('dotenv').config({path:envPath})

chai.use(chaiHttp);
chai.use(chaiThings);
chai.should();

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


describe('evidenceServices', function() {
  describe('search keywords', function() {
     it("should match keywords", (done) => {
      chai.request(app)
          .get('/api/v1/evidences/search')
          .query({
            query: JSON.stringify(
              {
                op:"$match",
                field:"keywords",
                value:"Agile software development",
            })
          })
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.should.be.lengthOf(4);
           });
      done();
    });  
  });
});


describe('evidenceServices', function() {
  describe('search authors', function() {
     it("should equal author", (done) => {
      chai.request(app)
          .get('/api/v1/evidences/search')
          .query({
            query: JSON.stringify(
              {
                op:"$eq",
                field:"authors",
                value:"Jim Buchan",
            })
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

describe('evidenceServices', function() {
  describe('search authors', function() {
     it("should match authors", (done) => {
      chai.request(app)
          .get('/api/v1/evidences/search')
          .query({
            query: JSON.stringify(
              {
                op:"$match",
                field:"authors",
                value:"jim buchan",
            })
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

describe('evidenceServices', function() {
  describe('search authors', function() {
     it("should match author name part", (done) => {
      chai.request(app)
          .get('/api/v1/evidences/search')
          .query({
            query: JSON.stringify(
              {
                op:"$match",
                field:"authors",
                value:"Paul",
            })
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
  describe('search date, keywords, and authors', function() {
     it("should match date, keywords, and authors", (done) => {
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
                  op: '$match',
                  field: 'keywords',
                  value: 'agile',
                },
                {
                  op: '$or',
                  queries: [
                    {
                      op: '$match',
                      field: 'authors',
                      value: 'jim'
                    },
                    {
                      op: '$match',
                      field: 'authors',
                      value: 'paul'
                    }
                  ]
                }
              ]
            }),
          })
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.should.be.lengthOf(3);
              res.body.should.be.to.include.something.that.has.property('title', 'Alignment of Stakeholder Expectations About User Involvement in Agile Software Development');
              res.body.should.be.to.include.something.that.has.property('title', 'Real Time Agile Metrics for Measuring Team Performance.');
           });
      done();
    });  
  });
});
