var gulp = require('gulp'),
	sass = require('gulp-sass'),
	twig = require('gulp-twig'),
	rename = require('gulp-rename'),
  connect = require('gulp-connect');

gulp.task('styles', function() {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('templates', function () {
    gulp.src('app/templates/index.twig')
      .pipe(twig())
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./dist/'))
});

gulp.task('html', function () {
  gulp.src('./dist/*.html')
    .pipe(connect.reload());
});


gulp.task('default', function() {
    gulp.watch('app/sass/**/*.scss',['styles']);
    gulp.watch('app/templates/*.twig',['templates']);
    gulp.watch('app/sass/**/*.scss',['html']);
    gulp.watch('dist/index.html',['html']);
});

gulp.task('connect', function () {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('serve', ['connect', 'html', 'default'], function () {
    require('opn')('http://localhost:8080');
});
