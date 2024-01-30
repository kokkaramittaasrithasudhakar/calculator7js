function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {	//takes the value
    document.getElementById("result").value += value; //in monitor-displays corresponding data,when button clicked,
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;	//take the input(data from monitor) and pass to q for evaluation
    var q = eval(p);	//The Js eval() function evaluates an expression that you pass to it.It returns the result of that expression.
    document.getElementById("result").value =q;	//again the evaluated value is stored in result
}

function clearOne(){
   var ev = document.getElementById('result');		//data from monitor is sliced accordingly based on index 
   ev.value = ev.value.slice(0,-1);		//delete data in reverse ie., start to end before end ; in general ev.value gives value from input field here we need modification like erase last element so used ev.value.slice
}
//for %(modulus) use 256%6=4 ie., 4 is reminder 