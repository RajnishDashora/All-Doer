var should = require('chai').should();
var alldoer= require('../lib/allDoer');
describe('linearStructure',function(){
  it('returns Hello',function(){
    alldoer.linearStructure().should.equal('linearStructure');
  });
});