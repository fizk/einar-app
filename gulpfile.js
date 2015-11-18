var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('watch', function () {
    gulp.watch('./web_modules/src/**/*.scss', ['sass', 'vulcanize']);
    gulp.watch('./web_modules/src/**/*.html', ['vulcanize']);
});

gulp.task('sass', function () {
    gulp.src('./web_modules/src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'));
});

gulp.task('vulcanize', ['sass'], function () {
    return gulp.src('./web_modules/src/**/*.html')
        .pipe(vulcanize({
            excludes: [],
            stripComments: true,
            inlineCss: true,
            inlineScripts: true
        })).on('error', function (err) {
            console.log(err.toString());
        })
        .pipe(gulp.dest('./public/components'));
});
