var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();


gulp.task('pvDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "dist"
    }
  });
});

// delete the current dist folder to get a fresh build
gulp.task('deleteDistFolder', function() {
  return del("./dist");
});


gulp.task('copyGeneral', ['deleteDistFolder'], function() {
  var copyToPath = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/css/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'

  ]
  return gulp.src(copyToPath)
    .pipe(gulp.dest('./dist'));
});

// optimize images for production : dependenci to deleteDistFolder
gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progessiv: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./dist/assets/images'));
});

// usemin : dependenci to deleteDistFolder
gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function() { return rev() }, function() { return cssnano() }],
      js: [function() { return rev() }, function() { return uglify() }]
    }))
    .pipe(gulp.dest('./dist'))
});


gulp.task('build', ['deleteDistFolder', 'copyGeneral', 'optimizeImages', 'usemin']);