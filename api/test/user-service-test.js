var assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require("../app");
const userService = require("../services/user-service");

var envPath = __dirname + "/../.env.debig"
require('dotenv').config({path:envPath})

chai.use(chaiHttp);
chai.should();

// getInitialUserList

describe('userServices', function() {
    describe('#getInitialUserList()', function() {
       it("should get all initial users", (done) => {
        var res = userService.getInitialUserList();
        res.should.be.a('array');
        done();
      });  
    });
  });

// getUserList

describe('userServices', function() {
  describe('#getUserList()', function() {
    it("should get all users", (done) => {
      chai.request(app)
          .get('/api/v1/users')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              done();
           });
      });
  });
});

// getUserByLogin

describe('userServices', function() {
  describe('#getUserByLogin()', function() {
    it('should be true', function() {
      assert.equal(1, 1);
    });
  });
});

// getUserById

describe('userServices', function() {
  describe('#getUserById()', function() {
    it('should be true', function() {
      assert.equal(1, 1);
    });
  });
});
