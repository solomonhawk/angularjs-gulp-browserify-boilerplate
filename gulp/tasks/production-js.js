var config = require('../config.json');
var gulp   = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('compress-js', ['browserify'], function() {
  return gulp.src(config.scripts.dest + '*.js')
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.dest));
});