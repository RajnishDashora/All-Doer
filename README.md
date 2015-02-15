# All-Doer

All-Doer means the creator of all. This node module is to create directory structure along with files.
###Installation
npm install git@github.com:RajnishDashora/All-Doer.git
### Usage

var allDoer = require('allDoer');
####APIs
1. Linear Structure - directories in side a directory 
2. Linear Structure - Files inside a directory 

#####1.Linear Structure - Directories inside a directory
---
    The below method creates a Directory named as Key in json and and sub directories inside this directory corresponding to each element(as directory name)  in the Value array.
    
---
    rootDirPath = Path of root directory
    structureJSON = {"outputDirectoryName":[dir1,dir2,dir3...]}
    alldoer.linearStructure(rootDirPath, structureJSON );
---
    OUTPUT : 
    rootDirPath/outputDirectoryName 
                                | ___ dir1
                                | ___ dir2
                                | ___ dir3
                                | ___ ...
                            
---
#####2.Linear Structure - Files inside a directory 
---
    The below method creates a Directory named as Key in json and and files inside this directory corresponding to each element(as file name) in the Value array.
    
---
    rootDirPath = Path of root directory
    structureJSON = {"outputDirectoryName":[file1,file2,file3...]}
    alldoer.linearDirOfFiles(rootDirPath, structureJSON );
---
    OUTPUT : 
    rootDirPath/outputDirectoryName 
                                | ___ file1
                                | ___ file2
                                | ___ file3
                                | ___ ...
                            
---
### Test
mocha and sinon chai is used to test, to run tests locally clone the repository then,  `npm install` run `grunt test`
### Contributing 
Please refer the jshintrc file for style and conventions.
### Release History
* 0.1.0 Initial release
