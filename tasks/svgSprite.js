import gulp from 'gulp'
const { src, dest } = gulp

import svgSprites from 'gulp-svg-sprite'

export const svgSprite = () => {
	return src('src/assets/img/svg/**/*.svg', {})
		.pipe(
			svgSprites({
				mode: {
					stack: {
						sprite: '../icons/icons.svg'
					}
				}
			})
		)
		.pipe(dest('dist/assets/img'))
}
