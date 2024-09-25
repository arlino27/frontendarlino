//declare variables
var val1 = 3;
var val2 = 8;
var myname = 'Arlino Nanalis';

//document Object
document.getElementById('my-btn').addEventListener('click',
function() {
	myFunction(myname, val1, val2);
});

//your function, remember your function
function myFunction (name, a, b){
	var value = a * b;
	var join = name+ ': ' +value;
	document.getElementById('value-demo').innerHTML = join;
}