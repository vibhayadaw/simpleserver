const bt = document.querySelector("button");
const result = document.getElementById("child")
const firstPromise = callBack => {
    result.textContent = "First promise loading";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };
  
  const secondPromise = callBack => {
    result.textContent = "Now Second promise loading";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };
  
  bt.addEventListener("click", () => {
    firstPromise().
      then( isTrue => {
        if(isTrue) {
          return secondPromise().
            then( () => { result.textContent = "Got Apple" } )
        }
    })
  });