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

//sayfadaki linklerin sayısı hrefe göre sayar
document.links.length;
//linklerin herhangibir valuesi
document.links[15].href
//sayfadaki resim sayısı 
document.images.length
//herhangi resmin id attributesini al
document.images[0].id;
//resim gizle ve resmi göster
{/* <p id="p1">
This is a text.
This is a text.
This is a text.
</p>
<input type="button" value="Hide text" 
onclick="document.getElementById('p1').style.visibility='hidden'">

<input type="button" value="Show text"
onclick="document.getElementById('p1').style.visibility='visible'"></input> */}

//You can declare many variables in one statement.
var person = "John Doe", carName = "Volvo", price = 200;

// If you re-declare a JavaScript variable, it will not lose its value.
var adamim = "synatnoteriya"
var adamim;
console.log(adamim);//value will be show

//foo is undifined
var foo;

//if a statement includes string, all of elements is will be strings
var a = 9+"5"+3 //953
var a = "2"+9+11 //2911
var a =  24 + 12 + "volvo" //36volvo
var x = "Volvo" + 16 + 4; //volvo164

var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';
document.getElementById("demo").innerHTML =
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3;

alert(2.0001)//2.0001
alert(2.00)//2


//**************js objects*****************
// JavaScript Objects
// There are two different ways to access an object property.
// You can use person.property or person["property"].
 
 
// Create an object:
var person = {
  firstName: "John",
  lastName : "Doe",
  id     :  5566,
  getFullName: function(){
      returnt this.firstName + this.lastName
  }
};
// Display some data from the object:
document.getElementById("demo").innerHTML =
person.firstName + " " + person.lastName;

document.getElementById("demo2").innerHTML = person["firstName"] + person.getFullName()

// If you access an object method without (), it will return the function definition:
// function() { return this.firstName + " " + this.lastName; }

//give a static parameter
//<button onclick="myFunction('Harry Potter','Wizard')">Try it</button>

//with this keyword. onclick event should show itself 
//<button onclick="this.innerHTML='Date is ' + Date()">The time is?</button>


    //************10.04.2021 ***************** */
var str = document.getElementById("demo").innerHTML;
var txt = str.replace("Microsoft", "W3Schools"); //firs Microsoft element!

function myFunction() {
  var str = "abcdef";
  var arr = str.split("");
  arr = arr.join("");
  document.getElementById("demo").innerHTML = arr; //abcdef
  arr = arr.join("x");
  document.getElementById("demo").innerHTML = arr; //axbxcxdxexfx
}

//<p>Extra large or extra small numbers can be written with scientific (exponent) notation:</p>
var x = 123e5;
var y = 123e-5;


{/* <p>Integers (numbers without a period or exponent notation) are accurate up to 15 digits:</p> */ }

var x = 999999999999999;
var y = 9999999999999999;

{/* <p>Floating point arithmetic is not always 100% accurate.But it helps to multiply and divide:

</p> */ }

var x = 0.2 + 0.1;
document.getElementById("demo").innerHTML = "0.2 + 0.1 = " + x; //0.2 + 0.1 = 0.30000000000000004

var x = 10;
var y = 20;
document.getElementById("demo").innerHTML =
"The result is: " + x + y; //"The result is: 1020 (cuz string)

{/* <p>JavaScript will try to convert strings to numbers when dividing:</p> */}

var x = "100";
var y = "10";
var a = x * y;   
var b = x % y;   
var c = x - y;   
var z = x / y;   
document.getElementById("demo").innerHTML = z;


{/* <p>JavaScript will NOT convert strings to numbers when adding:</p> */}
var x = "100";
var y = "10";
var z = x + y;   
document.getElementById("demo").innerHTML = z;

<p>A number divided by a non-numeric string becomes NaN (Not a Number):</p>
document.getElementById("demo").innerHTML = 100 / "Apple";

<p>A number divided by a numeric string becomes a number:</p>
document.getElementById("demo").innerHTML = 100 / "10";

<p>You can use the global JavaScript function isNaN() to find out if a value is a number:</p>
var x = 100 / "Apple";
document.getElementById("demo").innerHTML = isNaN(x);

<p>If you use NaN in a mathematical operation, the result will also be NaN:</p>
var x = NaN;
var y = 5;
document.getElementById("demo").innerHTML = x + y;

<p>If you use NaN in a mathematical operation, the result can be a concatenation:</p>
var x = NaN;
var y = "5";
document.getElementById("demo").innerHTML = x + y;

<p>The typeof NaN is number:</p>
var x = NaN;
document.getElementById("demo").innerHTML = typeof x;

<p>Infinity is returned if you calculate a number outside the largest possible number:
Infinity type = number
2/0 //infinity
-2/0 //-infinity
</p>

/*
4
16
256
65536
4294967296
18446744073709552000
3.402823669209385e+38
1.157920892373162e+77
1.3407807929942597e+154
Infinity
*/

var myNumber = 2; 
var txt = "";
while (myNumber != Infinity) {
   myNumber = myNumber * myNumber;
   txt = txt + myNumber + "<br>";
}
document.getElementById("demo").innerHTML = txt;

<p>Never create numbers as objects.JavaScript objects cannot be compared.</p>
var x = new Number(500);  // x is an object
var y = new Number(500);  // y is an object
document.getElementById("demo").innerHTML = (x==y);

<p>A number can be an object, but there is no need to create a number as an object.</p>
var x = 123; //number
var y = new Number(123);//object
document.getElementById("demo").innerHTML = typeof x + "<br>" + typeof y;

<p>The toString() method can output numbers from base 2 to 36:</p>
/*
32 =
Decimal 32
Hexadecimal 20
Octal 40
Binary 100000
*/
var myNumber = 32;
document.getElementById("demo").innerHTML =
"32 = " + "<br>" + 
" Decimal " + myNumber.toString(10) + "<br>" +
" Hexadecimal " + myNumber.toString(16) + "<br>" +
" Octal " + myNumber.toString(8) + "<br>" +
" Binary " + myNumber.toString(2);

<p>Numeric constants, preceded by 0x, are interpreted as hexadecimal:</p>
var x = 0xFF;
document.getElementById("demo").innerHTML = "0xFF = " + x; //output: 0xFF = 255