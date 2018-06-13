// notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log("bar");
};

notHoisted()