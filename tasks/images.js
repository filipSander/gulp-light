import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
import webp from 'gulp-webp'
const { src, dest } = gulp

export const images = () => {
	return src('src/assets/img/**/*.{jpg,jpeg,png,gif,webp}')
		.pipe(newer('dist/assets/img'))
		.pipe(webp())
		.pipe(dest('dist/assets/img'))
		.pipe(src('src/assets/img/*.{jpg,jpeg,png,gif,webp}'))
		.pipe(newer('dist/assets/img'))
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3
			})
		)
		.pipe(dest('dist/assets/img'))
}
