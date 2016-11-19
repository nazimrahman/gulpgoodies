// include plugins
var gulp = require('gulp'),
	gless = require("gulp-less"),
	gsass = require("gulp-sass");
 
// compile less to css
gulp.task('lesstocss', function () {
	gulp.src('less/less.less').pipe(gless()).pipe(gulp.dest('css'));
});

// compile sass to css
gulp.task('sasstocss', function () {
	gulp.src('sass/sass.scss').pipe(gless()).pipe(gulp.dest('css'));
});

gulp.task('runbasic', ['lesstocss', 'sasstocss']);
