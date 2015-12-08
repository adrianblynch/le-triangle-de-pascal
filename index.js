'use strict'

module.exports = function (limit) {

	let rows = [[1]]

	for (let i = 1; i < limit; i++) {

		let prevRow = rows[i - 1]
		let newRow = []

		for (let j = 0; j <= prevRow.length; j++) {
			let left = prevRow[j - 1] || 0
			let right = prevRow[j] || 0
			newRow.push(left + right)
		}

		rows.push(newRow)

	}

	return rows

}
