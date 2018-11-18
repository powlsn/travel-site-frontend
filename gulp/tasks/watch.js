var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', () => {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', () => {
    browserSync.reload();
  });
  
  watch('./app/assets/css/**/*.css', () => {
    gulp.start('combineCSS');
  });

  watch('./app/assets/scripts/**/*.js', () => {
    gulp.start('scriptsRefresh');
  });

});

gulp.task('combineCSS', ['styles'], () => {
  return gulp.src('./app/temp/css/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
});