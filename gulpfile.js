import sync from 'browser-sync'
import gulp from 'gulp'
import { zip } from './tasks/backup.js'
import {
	clearAssets,
	clearCss,
	clearDist,
	clearFonts,
	clearHtml,
	clearJs
} from './tasks/clear.js'
import { copyAssets, copyFonts } from './tasks/copyAssets.js'
import { fontsStyle, otfToTtf, ttfToWoff } from './tasks/fonts.js'
import { html } from './tasks/html.js'
import { images } from './tasks/images.js'
import { js, js_P } from './tasks/js.js'
import { scss } from './tasks/scss.js'
import { svgSprite } from './tasks/svgSprite.js'
const { series, watch } = gulp

global.app = {
	sync: sync
}

sync.create()

const fonts = series(copyFonts, otfToTtf, ttfToWoff, fontsStyle)

function serve() {
	sync.init({
		server: './dist'
	})
	watch('src/**.html', series(clearHtml, html)).on('change', sync.reload)
	watch('src/include/**/**.html', series(clearHtml, html)).on(
		'change',
		sync.reload
	)
	watch('src/assets/scss/**/**.scss', series(clearCss, scss)).on(
		'change',
		sync.reload
	)
	watch(
		[
			'src/assets/**/*.*',
			'!src/assets/scss/*.*',
			'!src/assets/js/*.*',
			'!src/assets/img/*.*',
			'!src/assets/fonts/*.*'
		],
		series(clearAssets, copyAssets)
	).on('change', sync.reload)
	watch('src/assets/js/*.*', series(clearJs, js)).on('change', sync.reload)
	watch('src/assets/img/**/*.*', series(images, svgSprite)).on(
		'change',
		sync.reload
	)
	watch('src/assets/fonts/*.*', series(clearFonts, fonts)).on(
		'change',
		sync.reload
	)
}

gulp.task(
	'dev',
	series(clearDist, fonts, html, scss, js, copyAssets, images, svgSprite, serve)
)
gulp.task(
	'build',
	series(clearDist, fonts, html, scss, js_P, copyAssets, images, svgSprite)
)
gulp.task('zip', zip)
gulp.task('test', fonts)
