module.exports = function towelSort (matrix) {
	if(matrix == undefined) return [];
	let newArr = [];
	for (var i = 0; i < matrix.length; i++) {
	if(i % 2 == 1) matrix[i].sort(( a , b )=> b - a);
	for (var j= 0; j < matrix[i].length; j++) {
		newArr.push(matrix[i][j]);
		}
	}
        return newArr;
	}
	

