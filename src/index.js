module.exports = function solveEquation(equation) {
  

	let equationArr = equation.split(' ');
	let a = Number(equationArr[0]);
	let b = Number(equationArr[3] + equationArr[4]);
	let c = Number(equationArr[7] + equationArr[8]);
	let resultArr = [];

	let x1 = Math.round((-b + Math.sqrt(Math.pow(b,2) - 4 * a * c))/ (2 * a));
	let x2 = Math.round((-b - Math.sqrt(Math.pow(b,2) - 4 * a * c))/ (2 * a));

	resultArr.push(x1);
	resultArr.push(x2);
	resultArr.sort( function(a,b){
			return a - b;
	});
	
	return resultArr;

}
