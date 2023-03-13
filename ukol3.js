const round = (cislo) => {
	const celaCast = Math.trunc(cislo)
	const necelaCast = cislo - celaCast
	if (Math.abs(necelaCast) === 0.5) {
		if (celaCast % 2 === 0) {
			return celaCast
		} else {
			return celaCast + 2 * necelaCast
		}
	}
	return Math.round(cislo)
}