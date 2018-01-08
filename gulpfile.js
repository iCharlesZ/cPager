var gulp = require('gulp')
var uglify = require('gulp-uglify')
var minifycss = require('gulp-minify-css')
var rename = require('gulp-rename')

gulp.task('minifyjs', function() {
    gulp.src('src/*.js')
    	.pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

gulp.task('minifycss', function() {
    gulp.src('src/*.css') 
    	.pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
})
