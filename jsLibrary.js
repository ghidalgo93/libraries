// Rounds value to the desired decimals
// function by Jack Moore, https://github.com/jackmoore
round(value, decimals) {
	return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

// Removes all child nodes from a given DOM element
// input: DOM element
function removeAllChildNodes(parent){
	while (parent.firstChild){
		parent.removeChild(parent.firstChild);
	}
}
