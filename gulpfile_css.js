var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', async function() {
	gulp.src('./css/style.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('./css/'));
});