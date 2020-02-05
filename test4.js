// // var search = document.createElement("input");
// // document.body.appendChild(search);
// // search.value = "fff";

// // var ul = document.createElement("ul");
// // document.body.appendChild(ul);
// // arrNames = ["Vasia","Aniaa","Alina","Katia","Pasha"];
// // for(var i = 0; i<arrNames.length; i++){
// // 	var li = document.createElement("li");
// // 	li.textContent = arrNames[i];
// // 	ul.appendChild(li);
// // }
// // var arrNewNames = [];
// // search.onclick = function(){
// // 	for(var i = 0; i<arrNames.length; i++){
// // 		if(arrNames[i].includes(search.value)){
// // 			var addNewName = arrNewNames.push(arrNames[i]);
// // 			console.log(arrNewNames);
// // 			ul.innerHTML = "";
// // 			for(var i = 0; i<arrNewNames.length;i++){
// // 				var li1 = document.createElement("li");
// // 	            li1.textContent = arrNewNames[i];
// // 	            ul.appendChild(li1);
// // 			}
// // 		}
// // 	}
// // }
// // var linksArr = [
// // 'https://www.onliner.by/',
// // 'https://www.youtube.com/',
// // 'https://vk.com/',
// // 'https://www.google.by/',
// // 'https://yandex.by/'
// // ];
// //  var div = document.createElement("div");
// //  div.className = "dv";
// //  document.body.appendChild(div);
// //  for (var i = 0; i<linksArr.length; i++){
// //  var a = document.createElement("a");
// //  a.setAttribute("href",linksArr[i]);
// //  a.textContent = linksArr[i];
// //  // a.setAttribute('href', 'https://learn.javascript.ru');
// //  console.log( `i am shoked ${linksArr[i]}`);
// //  div.appendChild(a);
// //  }
// // function createMarkup(itemsArr){
// // 	var div = document.createElement("div");
// //     div.className = "dv";
// //     document.body.appendChild(div);
// //     for (var i = 0; i<itemsArr.length; i++){
// //     	function  createLinkMarkup(text){
// //     		var a = document.createElement("a");
// //             a.setAttribute("href",text);
// //             a.textContent = itemsArr[i];
// //             div.appendChild(a);
// //     	}
// //     	createLinkMarkup(itemsArr[i]);
// //     }
// // }
// // createMarkup(linksArr);
// // var resualt = 1;
// // function factorial(n){
// // if(n > 0){
// // 	 return n*factorial(n-1);
	
// // }
// // else{
// // 	return 1 ;
// // }
// // }
// // alert(factorial());
// var resualt = 1;
// function fff(i){
// for(var i = 1; i<6;i++){
// 	console.log(i);
//   return resualt = resualt*i;
// }
// }
// alert(fff(6));
// function factorial(n){
// if (n==1) return 1;
// else return n*factorial(n-1);		
// }
// alert(factorial(5))
var name = prompt("Ведите имя");
if(name == "Ваня" || name == "Матвей"){
	alert(name +" ТОТАЛЬНЫЙ ЕБЛАН");
}
else if(name == "Дима"){
	alert(name + " ЛУЧШИЙ В МИРЕ");
}
for(var i = 0; i < 10; i = i+1){
	console.log(i);
}