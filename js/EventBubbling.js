/*
Given that the <body> of a web page consists of only divs with IDs
(nested within each other), write code that will log with the path
to a div, and how many levels of divs are within it, when it is
clicked on.

Example: Clicking on b should log: "a -> b, 1"
*/

// Add your javascript here
let path = "";

document.querySelector("#a").addEventListener("click", () => {
    path = "";
    path += " a ";
    document.getElementById("c").innerHTML = path;
  },true);
 document.querySelector("#b").addEventListener("click", () => {
    path += " -> b ";
    document.getElementById("c").innerHTML = path;
  },true);
 document.querySelector("#c").addEventListener("click", () => {
    path += "-> c ";
    document.getElementById("c").innerHTML = path;
    console.log(path)
  },true);