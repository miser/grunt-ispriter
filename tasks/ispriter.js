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

        function sprite(file) {
            file.src.filter(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                try {
                    var config = {};
                    if (options.imagedist) {
                        config = {
                            output: {
                                'cssDist': file.dest,
                                'imageDist': options.imagedist
                            },
                            input: filepath
                        }
                    } else {
                        config = {
                            output: file.dest,
                            input: filepath
                        }
                    }
                    ispriter.run(config);
                } catch (e) {
                    grunt.log.writeln(e);
                }
                grunt.log.writeln('File "' + file.dest + '" created.');
            });
        }
        
        grunt.util.async.forEachSeries(this.files, sprite);
    });
};