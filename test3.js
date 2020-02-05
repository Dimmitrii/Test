var arrWorkersList = [
{
name: 'Вася',
skills: 'javascript',
expierence: 5,
age: 25
},
{
name: 'Женя',
skills: 'javascript',
expierence: 3,
age: 21
},
{
name: 'Лена',
skills: 'javascript',
expierence: 1,
age: 25
},
]
function avarageage() {
	var sum = 0;
	for(var i = 0; i< arrWorkersList.length; i++){
		sum += this[i].age;
	}
	console.log(sum);
	var avgage = sum / arrWorkersList.length;
	console.log(avgage);
}
var vision = avarageage.bind(arrWorkersList);
vision();
var base = prompt("vvedite chislo");
var exponent = prompt("vvedite stepen chisla");
function numinexp(num,exponent){
var numexp = Math.pow(num,exponent);
console.log(numexp);
}
numinexp(base,exponent);
var a = prompt("vvedite 1 chislo");
var b = prompt("vvedite 2 chislo");
function isint(num1,num2){
var div = num1 / num2;
console.log(div);
if(Math.trunc(div)*num2 == num1){
	console.log("Chislo " +""+ a +" "+"kratno chislu " + b);
}
else{
	console.log("chislo " +""+ a +""+" ne kratno chislu "+b);
}
}
isint(a,b);

