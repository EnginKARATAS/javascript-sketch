document.getElementById("elementP").innerHTML = "Helloooooooooo wooorllldd"
let x = document.getElementById("baslikH");
let y = x.getElementsByTagName("p");

document.getElementById("demo").innerHTML = y[0].innerHTML + "sa";

let tumPler = document.getElementsByClassName("sekil");

let demo2 = document.getElementById("demo2")
demo2.innerHTML = tumPler[1].innerHTML;

let deger = document.querySelector("p.sekil");
console.log(deger);

document.getElementById("lonely").innerHTML = deger.innerHTML