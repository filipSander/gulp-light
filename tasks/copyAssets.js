import gulp from 'gulp'
const { src, dest } = gulp

export const copyAssets = () => {
	return src([
		'src/assets/**/*.*',
		'!src/assets/scss/*.*',
		'!src/assets/js/*.*',
		'!src/assets/img/**/*.*',
		'!src/assets/fonts/*.*'
	]).pipe(dest('dist/assets/'))
}

export const copyFonts = () => {
	return src('src/assets/fonts/*.*', {}).pipe(dest('dist/assets/fonts'))
}
