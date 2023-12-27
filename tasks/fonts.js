import gulp from 'gulp'
const { src, dest } = gulp

import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

export const otfToTtf = () => {
	return src('dist/assets/fonts/*.otf', { allowEmpty: true })
		.pipe(
			fonter({
				formats: ['ttf']
			})
		)
		.pipe(dest('dist/assets/fonts'))
}

export const ttfToWoff = () => {
	return src('dist/assets/fonts/*.ttf', { allowEmpty: true })
		.pipe(src('dist/assets/fonts/*.ttf'))
		.pipe(ttf2woff2())
		.pipe(dest('dist/assets/fonts'))
}

export const fontsStyle = () => {
	let fontFile = 'src/assets/scss/fonts.scss'
	fs.writeFile(fontFile, '//Fonts \n', cb)
	fs.readdir('dist/assets/fonts', function (err, fontsFiles) {
		if (fontsFiles !== undefined) {
			let newFile
			for (let i = 0; i < fontsFiles.length; i++) {
				let fontFileName = fontsFiles[i].split('.')[0]
				if (newFile != fontFileName) {
					let fontName = fontFileName.split('-')[0]
						? fontFileName.split('-')[0]
						: fontFileName
					let fontWeight = fontFileName.split('-')[1]
						? fontFileName.split('-')[1]
						: fontFileName

					const fontStyle = fontWeight.toLowerCase().includes('italic')
						? 'italic'
						: 'normal'

					if (fontWeight.toLowerCase().includes('thin')) fontWeight = 100
					else if (fontWeight.toLowerCase().includes('extralight'))
						fontWeight = 200
					else if (fontWeight.toLowerCase().includes('light')) fontWeight = 300
					else if (fontWeight.toLowerCase().includes('medium')) fontWeight = 500
					else if (fontWeight.toLowerCase().includes('semibold'))
						fontWeight = 600
					else if (fontWeight.toLowerCase().includes('bold')) fontWeight = 700
					else if (
						fontWeight.toLowerCase().includes('extrabold') ||
						fontWeight.toLowerCase().includes('heavy')
					)
						fontWeight = 800
					else if (fontWeight.toLowerCase().includes('black')) fontWeight = 900
					else fontWeight = 400

					fs.appendFile(
						fontFile,
						`@font-face {\n\tfont-family: '${fontName}';\n\tfont-display: swap;\n\tsrc: url('../fonts/${fontFileName}.woff2') format('woff2'),\n\t\t url('../fonts/${fontFileName}.ttf') format('truetype');\n\tfont-weight: ${fontWeight};\n\tfont-style: ${fontStyle};\n}\n`,
						cb
					)
					newFile = fontFileName
				}
			}
		}
	})
	function cb() {}
	return src('dist', { allowEmpty: true })
}
