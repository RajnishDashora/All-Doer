var should = require('chai').should();
var alldoer= require('../lib/allDoer');
describe('test',function(){
  it('returns Hello',function(){
    alldoer.test().should.equal('Hello All Doer');
  });
});