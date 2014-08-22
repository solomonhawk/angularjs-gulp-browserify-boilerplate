var config = require('../config.json');
var gulp   = require('gulp');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.scripts.src, ['lint', 'browserify']);
  gulp.watch(config.sass.src,    ['styles']);
  gulp.watch(config.views.src,   ['views', 'reload']);
});