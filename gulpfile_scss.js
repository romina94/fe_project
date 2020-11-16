const { src, dest } = require('gulp');
const compileSass = require('gulp-sass');

compileSass.compiler = require('node-sass');

const bundleSass = () => {
	return src('./css/style.scss')
		.pipe(compileSass().on('error', compileSass.logError))
		.pipe(dest('./css/'));
};

exports.bundleSass = bundleSass;