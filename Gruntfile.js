/*
 * ispriter
 * https://github.com/Miser/grunt-ispriter
 *
 * Copyright (c) 2014 miser
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    ispriter: {
      default_options: {
        options: {
          imagedist: '../spriter_images'
        },
        files: {
          './public/spriter_stylesheets/': ['./public/stylesheets/'],
        }
      }
    },
  });
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['ispriter']);

};