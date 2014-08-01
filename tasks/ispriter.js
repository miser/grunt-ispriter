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
        var done = this.async();
        var count = 0;
        var files = this.files;
        var imagedist = this.data.imagedist,
            fileversion = this.data.fileversion;

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
                var dist = file.imagedist || imagedist;
                if (dist) {
                    config = {
                        fileversion: fileversion,
                        input: inputPath,
                        output: {
                            'cssDist': outputPath,
                            'imageDist': dist
                        }
                    }
                } else {
                    config = {
                        fileversion: fileversion,
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