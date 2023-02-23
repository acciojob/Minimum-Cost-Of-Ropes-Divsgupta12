//your code here
function minCostOfRopes(event){
	event.preventDefault();
	let inputelement = document.querySelector("input").value;
	let arr = inputelement.split(',');
	arr.sort(function(a,b) {return a-b});
	let cost = 0;
	while(arr.length>1){
		var res = Number(arr[0]) + Number(arr[1]);
		arr.push(res);
		cost += res;
		arr.shift();
		arr.shift();

		arr.sort(function (a,b) {reurn a-b});
		
	}
	document.getElementById("result").textContent = cost;
}