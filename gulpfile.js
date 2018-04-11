var gulp = require('gulp'),
		sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer');
    
gulp.watch("scss/*.scss", ['sass']);

gulp.task('sass', function() {
	return sass('scss/*.scss', {
		noCache: true,
		style: 'compressed' 
	})
	.on('error', sass.logError)
	.pipe(autoprefixer({
    browsers: ['last 3 versions', '> 5%'],
    cascade: false
  }))
	.pipe(gulp.dest('css/')); 
});

gulp.task('default', ['sass']);