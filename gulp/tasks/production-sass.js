var config    = require('../config.json');
var gulp      = require('gulp');
var minifyCSS = require('gulp-minify-css');
var debug     = require('gulp-debug');

gulp.task('compress-css', ['sass'], function() {
  return gulp.src(config.sass.dest + '**.css')
    .pipe(debug({ verbose: true }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.sass.dest));
});