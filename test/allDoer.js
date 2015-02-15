var should = require('chai').should();
var alldoer = require('../lib/allDoer');
var rimraf = require('rimraf')
var fs = require('fs');
//variables used,
var rootDirPath = 'lib/fixtures/';
var outputDirPath = rootDirPath + '/output';
var firstPath = outputDirPath + '/first'
var secondPath = outputDirPath + '/second'
var thirdPath = outputDirPath + '/third'
var structureJSON = {"output": ['first', 'second', 'third']};
var singleDirJSON= {"output": []};
describe('linear one level structures', function () {
  beforeEach(function () {
    rimraf.sync(outputDirPath)
  });
  it('creates directory of directories', function () {

    alldoer.linearDirOfFiles(rootDirPath , structureJSON );
    result = fs.existsSync(outputDirPath)
    && fs.existsSync(firstPath)
    && fs.existsSync(secondPath)
    && fs.existsSync(thirdPath);
    result.should.equal(true);
  });
  it('creates directory of files', function () {
    alldoer.linearStructure(rootDirPath, structureJSON );
    result = fs.existsSync(outputDirPath)
    && fs.existsSync(firstPath)
    && fs.existsSync(secondPath)
    && fs.existsSync(thirdPath);
    result.should.equal(true);
  });
  it('creates directory of files', function () {
    alldoer.linearStructure(rootDirPath,singleDirJSON);
    result = fs.existsSync(outputDirPath)
    result.should.equal(true);
  });
});