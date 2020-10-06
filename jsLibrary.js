// Rounds value to the desired decimals
// function by Jack Moore, https://github.com/jackmoore
round(value, decimals) {
	return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
