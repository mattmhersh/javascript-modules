/*jslint browser: true*/
/*global $, jQuery, angular*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var rev = require('gulp-rev');
//var jslint = require('gulp-jslint');
//var jshint = require('gulp-jshint');

gulp.task('js', function () {
    gulp.src(['bower_components/angular/angular.js', 'src/**/module.js', 'src/**/*.js'])
        //.pipe(rev())
        // pass your directives
        // as an object
//        .pipe(jshint())
//        .pipe(jshint.reporter('default'))
  /*      .pipe(jslint({
            // these directives can
            // be found in the official
            // JSLint documentation.
            node: true,
            evil: true,
            nomen: true,

            // pass in your prefered
            // reporter like so:
            reporter: 'default',
            // ^ there's no need to tell gulp-jslint
            // to use the default reporter. If there is
            // no reporter specified, gulp-jslint will use
            // its own.

            // specify whether or not
            // to show 'PASS' messages
            // for built-in reporter
            errorsOnly: false
        }))

        // error handling:
        // to handle on error, simply
        // bind yourself to the error event
        // of the stream, and use the only
        // argument as the error object
        // (error instanceof Error)
        .on('error', function (error) {
            console.error(String(error));
        })
  */      .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
});

gulp.task('watch', ['js'], function () {
    gulp.watch('src/**/*.js', ['js'])
});