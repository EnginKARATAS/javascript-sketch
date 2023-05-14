const arr = [
  {
    id: 1,
    name: "engin",
    surname: "karatas",
  },
  {
    id: 2,
    name: "azad",
    surname: "karatas",
  },
  {
    id: 3,
    name: "suheyp",
    surname: "erten",
  },
];
const narr = [];
arr.forEach((item) => {
  narr.push(item);
});

const nameArr = arr
  .filter((item) => item.id > 1)
  .map((item) => item.id)
  .sort((usr1, usr2) => (usr1.id < usr2.id ? 1 : -1));
console.log(nameArr);

a = 5 

var a;
console.log(a)

boya()
function boya (){
  console.log("ben bir baloncuğum, bubble to top" )
}
boya()