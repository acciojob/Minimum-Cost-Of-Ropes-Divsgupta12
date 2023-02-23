//your code here
function minCostOfRopes(event){
	event.preventDefault();
	let inputelement = document.querySelector("input").value;
	let arr = inputelement.split(',');
	arr.sort(function(a,b) {return a-b});
	let cost = 0;
	//2,4
	//2 4
	console.log(arr)
	// document.getElementById("result").textContent = arr.length
	let x = arr;
	while(x.length>1){
		var res = Number(x[0]) + Number(x[1]);
		x.push(res);
		//2 4 6
		cost += res;
		x.shift();
		x.shift();

		x.sort();
		
	}
	document.getElementById("result").textContent = cost;
}
