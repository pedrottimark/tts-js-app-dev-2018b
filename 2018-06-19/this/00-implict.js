const speak = function() {
  console.log("later my name is " + this.name);
};

const bird = {
    name: "Big Bird",
    speak
}

var teacher = {
  name: "Shane",
  speak,
};

bird.speak();
