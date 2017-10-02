function transformarray(value, index) {
   let str = 'Значение элемента массива -  (' + value + ') Его индекс - (' + index + ')';
    return str;
	}

	let week = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
	
	let result = week.map(transformarray);
	console.log(week.map(function(val, ind){
				return ("("+ind+")  "+val); 
			})
		);
	for( let i = 0; i < result.length; i++ ){
		document.getElementById('div1').innerHTML += "<p>" + result[i] + "</p>" ;
	}


