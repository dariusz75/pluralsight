'use strict'

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs local web server
var open = require('gulp-open'); // Opens an URL in a web browser
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify'); // Transforms jsx to js
var source = require('vinyl-source-stream'); // Uses convenctional text stream with Gulp
var concat = require('gulp-concat');
var lint = require('gulp-eslint');

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		mainJs: './src/main.js',
		images: './src/images/*',
		dist: './dist',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
		]
	}
}

// Task to start a local server
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
}); 


gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')
	.pipe(open({ url: config.devBaseUrl + ':' + config.port + '/' }));
});


gulp.task('html', function() {
	gulp.src(config.paths.html)
	.pipe(gulp.dest(config.paths.dist))
	.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify(config.paths.mainJs)
	.transform(reactify)
	.bundle()
	.on('error', console.error.bind(console))
	.pipe(source('bundle.js'))
	.pipe(gulp.dest(config.paths.dist + '/scripts'))
	.pipe(connect.reload());
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
	.pipe(concat('bundle.css'))
	.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', function() {
	return gulp.src(config.paths.js)
	.pipe(lint({config: 'eslint.config.json'}))
	.pipe(lint.format());
});

gulp.task('images', function() {
	gulp.src(config.paths.images)
	.pipe(gulp.dest(config.paths.dist + '/images'))
	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);


