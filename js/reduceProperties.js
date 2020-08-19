// Convert the array into an object using Array.reduce method
// ------------------------------------------------------------
// Input

const arr = [
  {
    "id": "1",
    "name": "A"
  },
  {
    "id": "2",
    "name": "B"
  },
  {
    "id": "3",
    "name": "C"
  }
];

// Output obj

// {
//   "1": "A",
//   "2": "B",
//   "3": "C"
// }

// let a = new Object()
const addProperty = (newObj,obj) => {
  return {...newObj, [obj['id']] : obj['name']}
}
console.log(arr.reduce(addProperty,{}))

document.querySelectorAll("div")
