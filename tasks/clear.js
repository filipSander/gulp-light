import { deleteAsync } from 'del'

export const clearDist = () => {
	return deleteAsync('dist')
}

export const clearHtml = () => {
	return deleteAsync('dist/*.html')
}

export const clearCss = () => {
	return deleteAsync('dist/assets/css/**/**.css')
}
export const clearJs = () => {
	return deleteAsync('dist/assets/js/**/**.js')
}

export const clearFonts = () => {
	return deleteAsync('dist/assets/fonts/*.*')
}

export const clearAssets = () => {
	return deleteAsync([
		'dist/assets/**/*.*',
		'!dist/assets/css/*.*',
		'!dist/assets/js/*.*',
		'!dist/assets/img/*.*',
		'!dist/assets/fonts/*.*'
	])
}
