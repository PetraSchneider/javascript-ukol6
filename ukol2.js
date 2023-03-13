const formatDate = (datum) => {
	let	day= String(datum.slice(0, 2))
	let	month= String(datum.slice(3, 5))
	let	year= String(datum.slice(6))
return day.padStart(2,'0') + month.padStart(2,'0') + year.padStart(4,'20')
}