var gulp = require('gulp');
var mocha = require('gulp-mocha');
var typescript = require('gulp-tsc');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

 
gulp.task('test', ['compile'], function () {
    return gulp.src('test/*.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('compile', function(cb){
  gulp.src(['index.ts','test/*.ts'])
    .pipe(typescript())
    .pipe(gulp.dest(''));
    cb();
});

gulp.task('watch', function () {
    watch('**/*.ts', batch(function (events, done) {
        gulp.start('compile', done);
    }));
});