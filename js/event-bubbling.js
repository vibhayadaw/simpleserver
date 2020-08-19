document.querySelector("#grandparent")
  .addEventListener("click", () => {
    console.log("Grand Parent Clicked!!");
  }, true);
document.querySelector("#parent")
  .addEventListener("click", () => {
    console.log("Parent Clicked!!");
  }, true);
document.querySelector("#child")
  .addEventListener("click", () => {
    console.log("Child Clicked!!");
  }, true);
  /* if the last parameter is true, it bubbles up 
  * if the last parameter is false, event capturing */