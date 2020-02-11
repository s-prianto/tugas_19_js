function repeat1(){
	var x = "Semangat...";
	console.log(x.repeat(5));
}

repeat1()

console.log();

function repeat2(berapa){
	var y ="*"
	for (var i=berapa; i<=65; i=i+20){
		console.log(y.repeat(i));
	}
	for (var j=i;j>=berapa;j=j-20){
		console.log(y.repeat(j))
	}
}


repeat2(5)
