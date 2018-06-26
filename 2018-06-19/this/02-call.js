var teacher = {name: 'Shane'};
var bird = {name:"Big Bird"}

var speak = function(item1, item2){
	console.log(this.name, item1, item2);
}

speak.call(bird, 'coffee', 'ramen'); //'Shane', 'coffee', 'ramen'