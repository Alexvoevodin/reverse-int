module.exports = function reverse(n) {
	if (n < 0) {
		let newN = -n;
		return Number(String(newN).split("").reverse().join(""));
	}

	return Number(String(n).split("").reverse().join(""));
}