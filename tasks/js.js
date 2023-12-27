import gulp from 'gulp'
import webpack from 'webpack-stream'
const { src, dest } = gulp

export const js = () => {
	return src('src/assets/js/script.js', { sourcemaps: true })
		.pipe(
			webpack({
				mode: 'development',
				output: {
					filename: 'script.js'
				}
			})
		)
		.pipe(dest('dist/assets/js/'))
}

export const js_P = () => {
	return src('src/assets/js/script.js', { sourcemaps: true })
		.pipe(
			webpack({
				mode: 'production',
				output: {
					filename: 'script.js'
				}
			})
		)
		.pipe(dest('dist/assets/js/'))
}
