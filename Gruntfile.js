/**
* Run script for Grunt, task runner
*
* The MIT License (MIT)
* Copyright (c) 2015 GochoMugo <mugo@forfuture.co.ke>
*/


/* global exports:true, module:true */


exports = module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    jshint: {
      all: ["Gruntfile.js", "xkcd.js"],
      options: {
        jshintrc: true
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("test", ["jshint"]);

};
