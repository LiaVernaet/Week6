// JavaScript Document

(function() {
	console.log("JS file loaded");
	
	//Variables
	var num1 = document.querySelector("#input1");
	var num2 = document.querySelector("#input2");
	var equals = document.querySelector("#trigger");
	var outcome = document.querySelector("#value");
//	console.log(num1);
//	console.log(num2);
//	console.log(equals);
//	console.log(outcome);
	
	
	//Functions
	function addStuff(){
//		console.log("from addStuff")
		console.log(num1.value);
		console.log(num2.value);
		
		  var total = parseInt(num1.value) + parseInt(num2.value);  //ParseInt converts string to integer
		console.log(total);
		outcome.innerHTML = total; //innerHTML goes into p tag and edits. like doc.write
	
	}
	//Listeners
	equals.addEventListener("click", addStuff, false);
	
	
})();