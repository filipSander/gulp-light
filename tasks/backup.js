import gulp from 'gulp'
import zipPlugin from 'gulp-zip'
const { src, dest } = gulp

export const zip = () => {
	const date = new Date()
	const str =
		date.getDate() +
		'.' +
		`${date.getMonth() + 1}` +
		'.' +
		date.getFullYear().toString().slice(2, 4) +
		' ' +
		formatAMPM(date)
	console.log('\n\tБэкап от ' + str + ' готов.\n')
	return src('src/**/*.*', {})
		.pipe(zipPlugin(str + '.zip'))
		.pipe(dest('backup'))
}

function formatAMPM(date) {
	let hours = date.getHours()
	let minutes = date.getMinutes()
	const ampm = hours >= 12 ? 'pm' : 'am'
	hours = hours % 12
	hours = hours ? hours : 12
	minutes = minutes < 10 ? '0' + minutes : minutes
	return hours + '.' + minutes + ' ' + ampm
}
