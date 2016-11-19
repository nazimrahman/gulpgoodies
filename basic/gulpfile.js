// include plugins
var gulp = require('gulp'),
	gless = require("gulp-less"),
	gsass = require("gulp-sass"),
	gcoffee = require('gulp-coffee');
 
// compile less to css
gulp.task('lesstocss', function () {
	gulp.src('less/*.less').pipe(gless()).pipe(gulp.dest('css'));
});

// compile sass to css
gulp.task('sasstocss', function () {
	gulp.src('sass/*.scss').pipe(gless()).pipe(gulp.dest('css'));
});

gulp.task('drinkcoffee', function () {
	gulp.src('coffee/*.coffee').pipe(gcoffee()).pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
    //gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sasstocss']);
    gulp.watch('less/*.less', ['lesstocss']);
    gulp.watch('coffee/*.coffee', ['drinkcoffee']);
});

// sequence tasks
gulp.task('default', ['lesstocss', 'sasstocss', 'drinkcoffee', 'watch']);

