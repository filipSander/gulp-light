import gulp from 'gulp'
import autoPrefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat'
import csso from 'gulp-csso'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
const { src, dest } = gulp
const sass = gulpSass(dartSass)

export const scss = () => {
	return src('src/assets/scss/style.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(
			autoPrefixer({
				overrideBrowserslist: ['last 2 versions'],
				cascade: false
			})
		)
		.pipe(csso())
		.pipe(concat('style.min.css'))
		.pipe(dest('dist/assets/css'))
}
