// var name=document.body;
// selector
// getElementById
// getElementsByClassName
// querySelector
// querySelectorAll
// var h1=document.getElementById("name");
var h1s = document.getElementsByClassName("headings");
// var h1s=document.getElementsByClassName("headings");  no problem
const btn = document.querySelector("button");
// const btn="h"//not can define again important to assign value
// var h1s=document.querySelector("#name");
// var h1s=document.querySelector(".headings");
// var h1s=document.querySelector("h2");
// var name=document.querySelector("h1").innerHTML="hello";
// var name=document.querySelector("h1").innerHTML="Arvind";
let name = document.querySelector("h1");
console.log(name)
name.innerText += "Arvind";

let greate = document.querySelector("h2");
greate.innerText += "Hello";

let day = document.querySelector("h3"); //problem redfine
day = document.querySelector("h3");
day.innerText += "Sat";

// console.log(typeof h1s)

// addEventListener

btn.addEventListener("click", (e) => {
  day.style.color = "red";
  name.style.color = "green";
  greate.style.color = "blue";
});
