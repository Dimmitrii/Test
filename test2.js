function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  }
  console.log(getRandomInt(0,256));
function color(firstN,secondN,thirdN){
	firstN = getRandomInt(0,256);
	secondN = getRandomInt(0,256);
	thirdN = getRandomInt(0,256);
	var color = [firstN,secondN,thirdN];
	console.log(color);
	document.body.style.backgroundColor = "rgb(" + String(color) + ")";
	var color1 = "rgb(" + String(color) + ")";
	console.log(color1);
}
color();