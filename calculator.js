// JavaScript Document

var decimal = false;

// Change Display
function d(val) {
		document.getElementById("d") .value = val;
}

// Type numbers and operators
function v(val) {
		if(val == ".")
			var decimal = true;
		document.getElementById("d") .value += val;
}

// Evaluate the equation
function e( )  {
		try {
			 d(eval(document.getElementById("d") .value));
		}
		catch(err) {
			d("Error");
		}
}