/*Работа на уроке - задание для студентов
Сумма свойств
Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
Если объект пустой, то результат должен быть 0.
Например:

"use strict";

var salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};

//... ваш код выведет 650
Свойство с наибольшим значением
Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

Если объект пустой, то пусть он выводит «нет сотрудников».
Например:
"use strict";

var salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};

//... ваш код выведет Петя
ДЗ
Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и 
обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:


function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []
Обрати внимание: функция не должна изменять переданный ей массив:


var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]
*/
//////////////////////////////////////
let sal = {};
let salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};
 let sum = 0;
 if(Object.keys(salaries).length == 0){
	 console.log("нет сотрудников");
 }
 else{
	 for(let key in salaries){
		 sum += salaries[key];
		 
	 }
	 if( sum == 0 ){
		 console.log("Нам денег не нужно, работу давай. Вася, Петя, Даша")
	 }
 }
 console.log(sum);
 /////////////////////////////////////
 let arr1 = [], i = 0;
 for(let key in salaries){
	 
	 arr1.push(salaries[key]);
 }
 console.log(arr1, "Array of numbers");
 ///////////////////////      declaration functions   ///////////////
 function map(func, arr){
	 let arrcopy = [];
	 for(let i = 0; i < arr.length; i++){
		 arrcopy[i] = arr[i];
	 }
	 let result = func(arrcopy);
	 return result;
 }
 function evenItemArr (ar) {
	 let evenArr  = [], i = 0;
	 for (;i < ar.length; i++ ){
		 if( ar[i] % 2 === 0 ){
			 evenArr.push(ar[i]);
		 }
	 }
	 return evenArr;
 }
 function oddItemArr (ar) {
	 let evenArr  = [], i = 0;
	 for (;i < ar.length; i++ ){
		 if( ar[i] % 2 !== 0 ){
			 evenArr.push(ar[i]);
		 }
	 }
	 return evenArr;
 }
 function square(x) {
	 let squareArr = [], i = 0;
	  for (;i < x.length; i++ ){
		 squareArr.push( x[i]*x[i] );
	 }
	 return squareArr; 
	 }
 /////////////////////////////////////////////////////////////////
 let result = map(evenItemArr, arr1);
 console.log(result, " It's array of the evens number");
 arr1.push(111);
 let result2 = map(oddItemArr, arr1);
 console.log(result2, " It's array of the odds number");
 let result3 = map(square, arr1);
 console.log(result3, " Square of the items array1");
 //////////////////////////////////////////////////////////////////
 var person = {
  name : 'Alex',
  country : 'UA',
  age : 29,
  beetrootTeacher : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
	let stroutput = "";
	for(let key in message){
		if( Array.isArray(message[key])){
			for(let i = 0; i < message[key].length; i++){
				stroutput += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + key + "[" + i + "]" + "  =>  " + message[key][i] + "<br>";
			}
		}
		else {
		stroutput += key + " : " + message[key] + "<br ><br >";
		 // console.log(person.key);
		}
	}
  var div = document.getElementById('output');
  div.innerHTML = stroutput;
}
print(person);