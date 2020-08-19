//Write a sum function which will sum all the arguments. If the argument is an array, we should sum the items inside the array. It can be array of array as well
//--------------------------------------------------------
console.log(sum(10,20,30)) //Output is 60
console.log(sum(100,200,[300,600]))  //Output is 1200
console.log(sum(1,[2, [3, [4, 5]]]))  //Output is 15

// function sum(...args){
//   // console.log(args);
//   let a = 0
//   for (let i = 0; i<args.length; i++){
//     if(typeof(args[i]) === 'object'){
//       a = a + sum(...args[i]);
//     }
//     else{
//       a = a + args[i]
//     }
//   }
//   return a;
// }

function sum(args){
  return args.reduce((a,item) => (typeof(item) === 'object') ? a + sum(...item) : a + item, 0)
}
