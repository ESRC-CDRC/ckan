var gulp = require('gulp');
var minify = require('gulp-minify');
var filter = require('gulp-filter');
var rename = require('gulp-rename');

gulp.task('compress', function() {
  gulp.src('./ckan/public/base/javascript/*.js')
    .pipe(filter(['*', '!*.min.js']))
    .pipe(minify())
    .pipe(filter(['*-min.js']))
    .pipe(rename(function(path){path.basename = path.basename.substring(0, path.basename.length - 4); path.extname='.min.js';}))
    .pipe(filter(['*.min.js']))
    .pipe(gulp.dest('./ckan/public/base/javascript/'))
});
