/*// Работа на уроке
Усовершенствовать “Онлайн тест” с урока про массивы. Вывести не только количество правильных 
ответов, но и вывести список вопросов на которые правильно ответили и список с неправильными ответами.
Работа на уроке - задание для студентов

Зайдите на сайт airbnb.com, откройте консоль в DevTools и проделайте следующее:

Выберите тег заголовка с уникальным именем класса и изменить текст
Выберите любой элемент на странице и удалите его
Выберите любой элемент и измените одно из его свойств CSS
Выберите определенную секцию (section) и переместить ее вниз 250 пикселей
Выберите любой компонент, например панель, и измените его видимость
Определить функцию с именем highFive, которая выводит "Дай пять!", а затем выполнить ее
ДЗ

Напишите функцию, которая выводит в HTML документ нумерованный список песен:

var playList = [
 {
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
 },
 {
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
 },
 {
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
 },
 {
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
 },
 {
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
 },
 {
 author: "AC/DC",
 song:"BACK IN BLACK"
 },
 {
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
 },
 {
 author: "METALLICA",
 song:"ENTER SANDMAN"
 }
];
*/

let playList = [
 {
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
 },
 {
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
 },
 {
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
 },
 {
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
 },
 {
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
 },
 {
 author: "AC/DC",
 song:"BACK IN BLACK"
 },
 {
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
 },
 {
 author: "METALLICA",
 song:"ENTER SANDMAN"
 }
];

function outputList(arr){
	let copyList = [], i = 0, outputElement, ulElement, liElement;
	for(; i < arr.length; i++){
		copyList.push(arr[i]);
		console.log(copyList[i]);
	}
	outputElement = document.getElementById("output");
	ulElement = document.createElement("ul");
	ulElement.className = "listClass";
	liElement = document.createElement("li");
	liElement.className = "itemListClass";
	// outputElement.appendChild(ulElement);
	
	for(let j = 0; j < copyList.length; j++) {
		
		liElement.innerText = copyList[j].author + " : " + copyList[j].song;
		
		console.log(liElement.innerText);
		
		ulElement.appendChild(liElement);
		liElement = document.createElement("li");
		liElement.className = "itemListClass";
	}
	
	outputElement.appendChild( ulElement );
	
}

outputList(playList);