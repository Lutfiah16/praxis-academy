function exampleScope() {
    var foo;
    console.log(foo); // => undefined
    foo = "Hello, world!";
    console.log(foo); // => "Hello, world!""
    console.log("This sentence will be logged"); // => “This sentence will be logged”
  }