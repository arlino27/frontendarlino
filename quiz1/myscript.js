var val1 == 3;
var val2 = 8;
var myName = 'Semmy Wellem Taju';

document.getElementById('my-btn').addEventListener('click',function() {
	myName = 'Piter Pan';
	myFunction(myName, val1, val2);
});

function myFunction(name, a, b) {
	name = 'Putri Siregar';
	var value = a * b ;
	var join = 'Name: '+name+'('+value+')';
	document.getElementById('value-demo').innerHTML = join;
}