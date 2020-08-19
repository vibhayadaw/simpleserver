let name = {
  firstName: "Vibha",
  lastName: "Singh"
}

let printFullName = function (city, state) {
  console.log(this.firstName + " " + this.lastName+ ", "+ city + ", "+ state);
}

myPrintFxn = printFullName.bind(name, "Bengaluru");
myPrintFxn("Karnataka");

Function.prototype.myBind = function (...args) {
  let obj = this;
  //Slice the param then 
  param = args.slice(1);
  return function (fxnArgs) {
    obj.call(args[0],param, fxnArgs);
  }
}

myPrintFxnBind = printFullName.myBind(name, "Bengaluru", );
myPrintFxnBind("Karnataka");