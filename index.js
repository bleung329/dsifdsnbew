var popTotal = function(biggyData){
    return biggyData.map(function(year){return year['total']})
	.reduce(function(a,b){return (a+b)});
};

<<<<<<< HEAD
var workingAge = function(biggyData){ //working age is 15 to 64
    return biggyData
	.filter(function(year){return year['age'] >= 15 && year['age'] <= 64})
	.map(function(year){return year['total']})
	.reduce(function(a,b){return (a+b)});
};

var percentWorkingAge = function(biggyData){
    return 100 * workingAge(biggyData) / popTotal(biggyData)
}

var percentGender = function(biggyData){
    var males = biggyData.map(function(year){return year['males']})
	.reduce(function(a,b){return (a+b)});
    var females = biggyData.map(function(year){return year['females']})
	.reduce(function(a,b){return (a+b)});
    var total = males + females
    males = 100 * males / total
    females = 100 * females / total
    return [males, females]
=======
var popTotal = function(biggyData)
{
	var totalsList = biggyData.map(function(n){
		return n["total"];
	})
	//console.log(totalsList);
	return totalsList.reduce(function(a,b){
		/*
		console.log("A:");
		console.log(a);
		console.log("B:");
		console.log(b);
		*/
		return(a+b);
	});
>>>>>>> 4d76eeb0afe4c4748395b99df5c9405cfe30109e
}

var retirementAge = function(biggyData){
    return biggyData
	.filter(function(year){return year['age'] > 65})
	.map(function(year){return year['total']})
	.reduce(function(a,b){return (a+b)});
};

var percentRetired = function(biggyData){
    return 100 * retirementAge(biggyData) / popTotal(biggyData)
};

console.log("total population:");
console.log(popTotal(bigData));
console.log("working age population:");
console.log(workingAge(bigData));
console.log("working age percentage:");
console.log(percentWorkingAge(bigData));
console.log("gender percentage: [male, female]");
console.log(percentGender(bigData));
console.log("retirement age percentage:");
console.log(percentRetired(bigData));
