var teacher = {name: 'Shane'};

var speak = function(item1, item2){
	console.log(this.name, item1, item2);
}

// speak.apply(teacher, ['coffee', 'ramen']); //'Shane', 'coffee', 'ramen'


const numbers = [1,2,3,124,1];

console.log(Math.max.apply(null, numbers))