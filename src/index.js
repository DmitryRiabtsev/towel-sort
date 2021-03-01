module.exports = function towelSort (matrix) {
	if(matrix == undefined) return [];
	let newArr = [];
	for (let i = 0; i < matrix.length; i++) {
		if(i % 2 == 1) matrix[i].reverse();
		for (let j= 0; j < matrix[i].length; j++) {
			newArr.push(matrix[i][j]);
		}
	}
        return newArr;
	}
	

