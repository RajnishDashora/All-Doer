'use strict';
var _ = require('lodash');
var fs = require('fs');
module.exports = {
  linearStructure : function(path,structure){
    if(_.last(path)!=='/'){
      path=path+'/';
    }
    var rootDirName= _.keys(structure)[0];
    try{
      fs.mkdirSync(path + rootDirName);
    }catch(err){
      console.log(err);
    }
    var subDirs=structure[rootDirName];
    _.forEach(subDirs,function(d){
      try{
        fs.mkdirSync(path + rootDirName + '/' + d);
      }catch(err){
        console.log(err);
      }
    });
    return 'linearStructure';
  }
};



