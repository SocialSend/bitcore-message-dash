'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('socialsendcore-build');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
