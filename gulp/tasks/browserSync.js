var browserSync = require('browser-sync');
var gulp        = require('gulp');

var proxy = 'localhost:' + (config.serverport + 1);

gulp.task('browserSync', function() {
  browserSync({
    proxy: proxy
  });
});