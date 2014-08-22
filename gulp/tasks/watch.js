var config = require('../config.json');
var gulp   = require('gulp');
var runSequence   = require('run-sequence');

gulp.task('watch', ['browserSync', 'server'], function() {
  gulp.watch(config.scripts.src, ['lint', 'browserify']);
  gulp.watch(config.sass.src,    ['sass']);
  gulp.watch(config.images.src,  ['images', 'reload']);
  gulp.watch(config.views.src,   ['views']);
  // gulp.watch(config.views.src, function(){
  //   gulp.runSequence('views', 'reload');
  // });
});