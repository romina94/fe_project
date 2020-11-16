var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', async function() {
	gulp.src('./js/dropdown.js')
		.pipe(uglify())
		.pipe(gulp.dest('./js/'));
});