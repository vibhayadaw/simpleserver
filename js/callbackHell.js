const bt = document.querySelector("button");
const result = document.getElementById("child")

const firstCallBack = callBack => {
  result.textContent = "First callback loading";
  setTimeout(() => {
    callBack(true);
  }, 2000);
};

const secondCallBack = callBack => {
  result.textContent = "Now Second callback is loading";
  setTimeout(() => {
    callBack(true);
  }, 2000);
};

bt.addEventListener("click", () => {
  firstCallBack((callBack) => {
    if(callBack) {
      secondCallBack( cb => {
        if(cb){
          result.textContent = "Got Apple";
        }
      })
    }
  })
});