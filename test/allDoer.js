var should = require('chai').should();
var alldoer = require('../lib/allDoer');
var rimraf = require('rimraf')
var fs = require('fs');
describe('linear one level structures', function () {
  beforeEach(function () {
    rimraf.sync('/Users/rajnishdashora/work/nodejs/All-doer/lib/fixtures/output')
  });
  it('creates directory of directories', function () {
    alldoer.linearDirOfFiles('/Users/rajnishdashora/work/nodejs/All-doer/lib/fixtures/', {"output": [1, 2, 3]});
    result = fs.existsSync('/Users/rajnishdashora/work/nodejs/All-doer/lib/fixtures/output')
    && fs.existsSync('/Users/rajnishdashora/work/nodejs/All-doer/lib/fixtures/output/1')
    && fs.existsSync('/Users/rajnishdashora/work/nodejs/All-doer/lib/fixtures/output/2')
    && fs.existsSync('/Users/rajnishdashora/work/nodejs/All-doer/lib/fixtures/output/3');
    result.should.equal(true);
  });
  it('creates directory of files', function () {
    alldoer.linearStructure('/Users/rajnishdashora/work/nodejs/All-doer/lib/fixtures/', {"output": [1, 2, 3]});
    result = fs.existsSync('/Users/rajnishdashora/work/nodejs/All-doer/lib/fixtures/output')
    && fs.existsSync('/Users/rajnishdashora/work/nodejs/All-doer/lib/fixtures/output/1')
    && fs.existsSync('/Users/rajnishdashora/work/nodejs/All-doer/lib/fixtures/output/2')
    && fs.existsSync('/Users/rajnishdashora/work/nodejs/All-doer/lib/fixtures/output/3');
    result.should.equal(true);
  });
});