function myCallback(err, result) {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log(result);
  }
}

function asyncAdd(x, y, callback) {
  setTimeout(() => callback(null, x + y), 1000);
}

asyncAdd(1, 4, myCallback);
