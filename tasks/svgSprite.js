import gulp from 'gulp'
const { src, dest } = gulp

import svgSprites from 'gulp-svg-sprite'

export const svgSprite = () => {
	return src('src/assets/img/**/*.svg', {})
		.pipe(
			svgSprites({
				mode: {
					stack: {
						sprite: '../icons/icons.svg',
						example: true
					}
				}
			})
		)
		.pipe(dest('dist/assets/img'))
}
