var config = require('../config.json');
var gulp   = require('gulp');
var jshit  = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src(config.scripts.src, '!app/js/templates.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});