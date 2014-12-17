var should = require('chai').should();
var alldoer= require('../lib/allDoer');
describe('linearStructure',function(){
  it('creates directories',function(){
    alldoer.linearStructure('/Users/rajnishdashora/work/nodejs/All-doer/lib/fixtures/',{"output":[1,2,3]});
  });
});