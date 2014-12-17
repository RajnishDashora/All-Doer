module.exports = function (grunt) {
  'use strict';

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    watch: {
      js: {
        files: ['lib/{,*/}*.js'],
        tasks: ['jshint:all', 'copy:dev','shell']
      }

    },
    jshint: {
      options: {
        jshintrc: '.jshintsrc',
        reporter: require('jshint-stylish')
      },
      all: ['Gruntfile.js', 'lib/{,*/}*.js','tests/{,*/}*.js']
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd: 'lib',
            src: ['{,*/}*.js','fixtures/*.pptx'],
            dest: '.tmp'
          }
        ]
      },
      build: {
        files: [
          {
            expand: true,
            cwd: '.tmp',
            src: ['{,*/}*.js'],
            dest: 'dist'
          }
        ]
      }
    },
    clean: {
      all: {
        src: ['.tmp','dist']
      },
      lib:{
        src:['lib/output']
      }
    },

    shell: {
      options: {
        stderr: false
      },
      target: {
        command: 'node_modules/mocha/bin/mocha --reporter spec'
      }
    }


  });


  // Default task(s).

  grunt.registerTask('test', [
    'shell'
  ]);
  grunt.registerTask('cleanlib',[
    'clean:lib'
  ]);

  grunt.registerTask('default', [
    'clean:all',
    'jshint:all',
    'copy:dev',
    'shell',
    'watch'
  ]);
  grunt.registerTask('build', [
    'clean:all',
    'jshint:all',
    'copy'
    //uglification to add
  ]);


};