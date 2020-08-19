const expensive = () => console.log("Expensive");

let throttle = function (fn, limit){
  let context = this;
  let args = arguments;
  let flag = true;
  return function(){
    // call function first set the flag as false and set back only when timer expired
    if(flag){
      fn(context, arguments);
      flag = false;
      setTimeout(()=>{
        flag = true;
      },limit);

    }
    
  }

}

const betterExpensive = throttle (expensive, 1000);

window.addEventListener("resize", betterExpensive);