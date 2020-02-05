var arr = [
"вася","nfyz","урока",
]
for(var i=0; i<arr.length; i++){
	var div1 = document.createElement("div");
	div1.textContent=arr[i];
	document.body.appendChild(div1);
}