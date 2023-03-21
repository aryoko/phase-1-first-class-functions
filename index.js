function receivesAFunction(cbFunction) {
  cbFunction();
}

const cbFunction = (num) => num + 4

// const fn = returnsANamedFunction() 

returnsANamedFunction = function() {
  return receivesAFunction
}

function returnsAnAnonymousFunction () {
  return function() {console.log("I an anonymous!")}
}