function add() {
	 console.log(Array.isArray(arguments));
	 console.log(Array.prototype.slice.call(arguments));
}
	
add(1,2,3,4,5,6,7,8);