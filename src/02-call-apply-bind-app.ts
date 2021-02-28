// Object literal
const myObj = {
  myMethod() {
    console.log("Object:::", this);
  }
};

myObj.myMethod();

// Function
function myFunction(...text: string[]) {
  console.log("Function:::", this, text);
}

const bindFunction = myFunction.bind(myFunction, "ABC", "DEF");
bindFunction();
bindFunction();
bindFunction();
myFunction.call(myObj, "ABC", "DEF");
myFunction.apply(myObj, ["ABC", "DEF"]);
