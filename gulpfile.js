'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
  return gulp.src('./css/*.scss')
		.pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./css/*.scss', ['sass']);
};