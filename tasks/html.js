import gulp from 'gulp'
import include from 'gulp-file-include'
import htmlmin from 'gulp-htmlmin'
import versionNumber from 'gulp-version-number'
const { src, dest } = gulp

export const html = () => {
	return src('src/**.html')
		.pipe(
			include({
				prefix: '@@'
			})
		)
		.pipe(
			htmlmin({
				removeComments: true
			})
		)
		.pipe(
			versionNumber({
				value: '%DT%',
				append: {
					key: '_v',
					cover: 0,
					to: ['css', 'js']
				}
			})
		)
		.pipe(dest('dist'))
}
