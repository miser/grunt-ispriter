/*
 * grunt-ispriter
 * https://github.com/Miser/grunt-ispriter
 *
 * Copyright (c) 2014 miser
 * Licensed under the MIT license.
 */

'use strict';
var ispriter = require('ispriter');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('ispriter', 'A grunt plugin to create css sprite with ispriter.', function() {
        var that = this;
        var done = this.async();
        var options = that.options();
        var count = 0;
        var files = this.files;

        merge();

        function merge() {
            if (files.length == 0) {
                done();
                return;
            }
            var file = files.shift();
            
            var inputPath = file.src,
                outputPath = file.dest;
            try {
                var config = {};
                if (file.imagedist) {
                    config = {
                        output: {
                            'cssDist': outputPath,
                            'imageDist': file.imagedist
                        },
                        input: inputPath
                    }
                } else {
                    config = {
                        output: outputPath,
                        input: inputPath
                    }
                }
                ispriter.merge(config, function() {
                    merge();
                })
            } catch (e) {
                grunt.log.writeln(e);
            }
        }
    });
};