var Brad = {
  name: "Brad",
  sayName: function() {
    console.log(this.name);
  },
  sayMyNameDelay: function() {
    const fn = this.sayName;
    setTimeout(fn, 1000);
    // setTimeout(this.sayName, 1000);
  },
};

// Brad.sayName();
Brad.sayMyNameDelay();
