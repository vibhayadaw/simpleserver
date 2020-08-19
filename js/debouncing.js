let counter = 0
const getData = () => {
  //calls an api and gets data
  console.log("Fetching Data ...", counter++)
}

let debounce = function(fn, d){
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(context, arguments)
    }, d)
  }
}

let someBetterFxn = debounce(getData, 300);