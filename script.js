// console.log("canikom");
// console.log(1234);
// console.log(true);
// console.log([2,1,3]);
// console.error("aman aman nereye geldik");
// console.warn("bir uyarı oluştur");

// console.clear();

//js değişkenler ***
// var age ;
// console.log(age);
// age = 30;
// console.log(age);
// var fullname = 'engingaragaşi';
// console.log(fullname);

// var _4ya = "engin";
// var ad_soyad = "kes lan";

// var engin = 33;
// var engiN = 22;
// console.log(engin + engiN);

// let city = 'kuku';
// console.log(city);
// const email = 'engin@gmail.com';
// console.log(email);
// email = 'ceddar@com';
// console.log(email);

//variable

// let firstName = 'engin';
// console.log(typeof firstName);

// let money_letti = 100.5;
// console.log(typeof money);
// console.log(money);

// let job = null;
// let car;
// console.log(typeof job);//undif
// console.log(typeof car)//undif

// let diziIlk = ['engin','süleyman','burday'];

// console.log(typeof diziIlk);

// let adress = {
//     city:'Kocaeli',
//     country: [2,3,3]
// }

// function BufonksyonuntipiniOgrenmeliyim(){
//     return 0;
// }

// console.log(typeof adress);
// console.log(typeof BufonksyonuntipiniOgrenmeliyim);c

// let num1 = Number('5');
// let num2 = Number('10');
// let total = num1+num2;

// let val;
// let val2
// let val3 = String([6,4,45])
// val= String(230);
// console.log(val);
// val2 = new Date();
// console.log(val2);
// console.log("0000000");
// let direkCasticinsayi = 33;
// let gelenstringsayi = (direkCasticinsayi).toString();
// let strsayi = (909).toString();
// console.log(gelenstringsayi);
// console.log(strsayi);
// console.log("0000000");

// val2 = String(new Date().getFullYear());


// console.log(typeof total);
// console.log(num1+num2);
// console.log('********');
// console.log(typeof val2);
// console.log(val2);
// console.log(val3);
// console.log("%%%%%%%%%%%");

// let yazi = String(200);
// let yazi2 = 'selamlar';
// console.log(yazi.length);
// console.log(yazi2.length);

// let nam = Number(429);
// console.log(nam.toFixed(9));

// console.log("XXXXXxxxxxxxxxxxxxxxXXXX");

// console.log(Number('99'));
// console.log(Number("selamlar"));
// console.log(Number(false));
// console.log(Number(true));
// console.log(Number([23,1,3]));
// console.log(Number('344').toFixed(20));

// console.log("YYYYYYYYYYYYY");

// let yearOfBorn = 1999;
// let yearDateNow = new Date().getFullYear();
// let myAge = yearDateNow - yearOfBorn;
// console.log(myAge);

// let a = 5;
// let b = '5';
// let strB = '5';
// let isEqual = a == b;
// let isThreeEqual = a === strB;
// let isTwoEqual = a == strB;
// console.log(isEqual);
// console.log(isThreeEqual);
// console.log(isTwoEqual);

// let val;

// val = a == b;
// val = a != b;
// val = a !== b //tip && değer doğruysa 1 else0
// val = a === b;
// val = a >= b;
// val = b < a;
// val = (a >= b) && (b === a);
// val = (true) || (false);


// console.log(val);


// let kgEngin = 80;
// let cmEngin = 1.80;

// let kgAda = 55;
// let cmAda = 1.75;

// let kilo = kgEngin;
// let boy = cmEngin;

// let index = (kgAda) / (cmAda*cmAda);
// console.log(index);

//  if (index > 0 && index < 18.4) {
//     console.log("zayif");
// }
// else if (index > 18.4 && index < 24.9) {
//     console.log("normal");
// }
// else if (index > 25 && index < 29.9) {
//     console.log("fazla kilolu");
// }
// else if (index > 30 && index <34.9) {
//     console.log("obez");
// }

// let d3 = new Date(2019,9,23,10,23);

// let d2 = new Date();
// d2.setDate(20);
// console.log(d2);


// let d = new Date();

// d.setFullYear(2008);
// d.setDate(20);//o aynın 7.günü hangi gün ise onun sayısal karşılığını verir
// d.setMonth(1);
// d.setHours(11);
// d.setMinutes(5);
// d.setSeconds(0);


// console.log("yıl:"+d.getFullYear());
// console.log("ay:"+d.getMonth());
// console.log("gün:"+d.getDay());
// console.log("saat:"+d.getHours());
// console.log("dakika:"+d.getMinutes());
// console.log("saniye:"+d.getSeconds());
// console.log("milisaniye:"+d.getMilliseconds());

// console.log(Math.abs( d3.getHours()-d.getHours())); //mutlaklı

//  let date1990 = new Date(1990,1,1);
// let date1199 = new Date(1990,1,1);
// let datePast = new Date('1/1/1990');//saat bilgisi vb gözardı edilir.

//  let b4 = datePast.getDate();
//  datePast.setDate(b4-1);
//  console.log(datePast);

// let tarih1 = new Date('2/06/2010');
// let tarih2 = new Date('5/05/2011');
// let milisecond = Math.abs(tarih1-tarih2);
// let saniye = milisecond / 1000;
// let dakika = saniye / 60;
// let aralarindakiSaat = dakika /60;
// let gun = aralarindakiSaat / 24;
// let yil  = gun / 365;
// let ay = yil*12;
// ay.



// console.log('saniye farkı:'+saniye);
// console.log('saat farkı:'+aralarindakiSaat);
// console.log('ay farkı:'+ay);
// console.log('gun farkı:'+gun);
// console.log('dakika farkı:'+dakika);


// let ageDate = new Date(ageDifMs);
// console.log(ageDate.getFullYear()-1970);

// let annelerGunu = new Date('5/1/2019');

// while (annelerGunu.getDay() != 0) {
//     annelerGunu.setDate(annelerGunu.getDate()+1);
// }
// annelerGunu.setDate(annelerGunu.getDate()+7);
// console.log(annelerGunu);

// const d1 = new Date('2020-01-01')
// const d2 = new Date('2020-01-01T00:00')
// console.log(d1.getFullYear(), d2.getFullYear())

// const date = new Date(2019)
// console.log(date.getFullYear())

// let d = new Date().toDateString();
// d.toString();
// console.log(d);

// let d = {
//     sehir:"kocaeli",
//     ad:"engin",
//     soyad:"karatas",
//     yas:"21",
//     meslek:"bilgisayar",
//     fakulte:"MMF"
// }
// console.log(d.ad,d.sehir);

// let d1 = new Date(2019,5,23);
// let d2 = new Date(2019,5,23);

// let karsilastirma = d1.getTime() == d2.getTime();

// console.log(karsilastirma);

// let zipla = () => console.log("zipladim abi");

// zipla();

// const isSameDay = (a, b) => {
//     return a.getFullYear() === b.getFullYear() &&
//       a.getMonth() === b.getMonth() &&
//       a.getDate()=== b.getDate()
//   }

//   const a = new Date(2019, 0, 26, 10) // 26 Jan 2019, 10am
//   const b = new Date(2019, 0, 26, 12) // 26 Jan 2019, 12pm
//   console.log(isSameDay(a, b)) // true

//   let d1 = new Date();

let val = '40.5213';
// val = Number(val);
// val = parseInt(val);
// let val = 'selam'
// let valnum = 5.42324

// let sonuc = isNaN(valnum);
// val = valnum.toPrecision(3);//3.4434 ü kes mesela 3.44
// val = valnum.toFixed(2);//virgülden sonra şu haneden sonra yuvarla
// console.log(sonuc);
// console.log(val);
// let mathli = Math.floor(3,8)//her zaman aşşağı yuvarla
// mathli = Math.ceil(3,8)//her zaman yukarı yuvarla
// mathli = Math.round(3,8)//adam akıllı yuvarla
// mathli = Math.abs(-3)//mutlak
// mathli = Math.min(1,2,34,7658,3);//en küçüğü ver
// mathli = Math.max(1,2,34,7658,3);//en büyüğü ver
// mathli = Math.floor(Math.random()*100+1) //0 ile 10 arasında random at

// console.log(mathli);
// const firstname = 'engin';
// const lastname = "karataş";
// const age = 21;
// let val;
// val= firstname + " " +lastname
// val = "engin";
// val += ' garadaş'
// val = 'ben`im adım' + firstname + 'engin ve yaş:' + age + "izmit\`te" //ters slash önemi
// val = "engin";
// val = val.concat("karatas",20,"güzel güzel",'string yapar',0000099); //concat parametreleri yanyana ekler stringlerde
// val = val.length //casting işlemini belirtmene gerek yok direk çeviriyor.
// val = val.toUpperCase();//tüm string karakterleri upper yapar
// val = val.toLowerCase();//kucuk

// let metin = "enginovski yada sonaovskiy"
// metin = metin.indexOf("engin"); //out:0, engin ifadesi 0dan başlar
// val = metin.indexOf("ovski");//out:5, ovski ifadesini dizinin başında gördü ve döndürdü
// val = metin.substring(7,13); //||||ovs|||| kırptı
// val = metin.substring(7); //|||||||ovski yada sonaovskiy baştan kırptı
// val = metin.slice(0,5)//altaratifi
// val = metin.slice(7)//aynıları işte
// val = metin.replace("yada",'yoda');//yada ifadesini yodayla değiştir

// let trimleyelim = "   alfacenturi   " //lenght:17
// val = trimleyelim.trim();//lenght:11
// val = val.length;

// let metin2 = "a,b,c,d,e,bişey bişey,z"
// let metin3 = "oha çıktımı ~ harbi aa hayallerim gerçekleşti"
// let metin4 = "www.enginkaraodun.com"
// val = metin2.split(",");//virgüle göre dizi oluştur. val bir dizidir

// val = metin4.substring(4);
//yada
// val = metin4.slice(4);
// val = metin3.replace("~","")
// val = metin3.split(" ").length//out:6
//www ile başlıyor mu evet yada hayır ?
// val = metin4.startsWith("www.")
//.com ile bitiyormu evlet bana 1 0 söyle ya da .com varsa indexini ver
// val = metin4.includes(".com")//.com var ise true dönder
// val = metin4.indexOf(".com")//.comun indexi kaçtaysa onu dönder(index yoksa -1 döner yani bunu ifleyebilirsin ama includesi bilmek faydalı olacaktır)

//************istenmeyen durumları ortadan kaldır..************ */
// let link = "  www.soonlikedimond.com/ArNavüT Köy is very intöresting"
// //tüm harfleri küçük yaptıktan sonra baştan sondan boşluk brakma ve ondan sonra türkçe karakterleri ingilizce muadillerine çevir
// link = link.trim();
// console.log(link.toLowerCase()
//                 .replace(/ö/g,"o")
//                 .replace(/ü/g,"u")
//                 .replace(/ /g,"-")
//                 .split()
//                 // .replace("ö","o") //bunu dersek sadece ilk gördüğü ö yı çevirir. Hepsi için:
// )



// console.log(val);
// console.l og(typeof val);

//-------------------------------------11.12.2020 diziler

// let benimdizim = ["Engin","Ahmet","Süleyman","gaby","hope"];//diziler obje olarak tutulur jsde
// let dizi = ["cabbar",null,256,undefined, ["alfa","beta"]];//bu şekilde farklı objeler verebiliriz

// console.log(dizi);
// benimdizim[benimdizim.length]= "cabbar"//pushun aynısı sonuna ekleme yapıyor.
// benimdizim.push("selanlar");//listenin(array sonuna eleman ekleme)
// benimdizim.unshift("gezelim");//listenin başına eleman ekleme
// benimdizim.pop()//remove the last element of the array
// benimdizim.shift();//remove firs item
// console.log(benimdizim.indexOf('Süleyman'));//index of süleyman stringlerdeki indexof kullanımının aynısı
// let valy = benimdizim.concat(dizi); //addiational items to end of array. arrayın sonuna diğer dizi elemanlarını ekler.
// console.log(valy);

// console.log(benimdizim.length);
// let val2 = benimdizim.splice();//tüm diziyi sil
// console.log(benimdizim);
// let val2 = benimdizim.splice(2,4); // 2<yeni dizi elemanları< 4
// benimdizim.splice(2,1,"seda","alican"); // 2. indisten sonra gördüğün ilk elemanı sil ve sildiğin boşlukların içine seda ve alican yaz
// benimdizim.filter()
//(kaçıncı indexten itibaren, kaç tane index sileyim? )
//veya
//(kaçıncı indexten, kaç tane "silip hangi değeri yazayım?")//yukarıda tanımlamadım. dizilerde ilk defa kullanıyorum

// console.log(benimdizim);
// console.log(typeof benimdizim);

//*********************
// let myDearArray = [];
// let myDearArray2 = [
//     {ad:"manidar",soyad:"ayter",il:"Gastamonu"},
//     {ad:"engin",soyad:"karataş",il:"Kocaeli"},
//     {ad:"ahmet",soyad:"kara",il:"vietnam"}
// ]

// for (let i = 0; i < 20; i++) {
//     myDearArray.push(Math.floor(Math.random(100)*100));
// }
//************XXXXXXXXXX************ */

// let countsOfMyPick = myDearArray.filter(function(check){
//     if(check > 50){
//         return true;//o değer 50 den büyükse true döndürüyor ve check edilen o değer filter yardımıyla yakalanıp counsOfMyPicke dizi şeklinde yazılıyor
//     }
// })

//OR

// let countsOfMyPick = myDearArray.filter(x => x > 50);


//***-->

//find the an object.property equal to given string

// let pickOnCountry = myDearArray2.filter(function(gelenSehir){
//     if(gelenSehir.il === "Kocaeli") //gelensehir.il kocaeli ise
//     return true;//o objeyi true yaptık ve filter truları yakaladı :)
// });

//or

// let pickOnCountry = myDearArray2.filter(gelenObje => gelenObje.il === "Kocaeli");


/***-->
//************XXXXXXXXXXX********************* */

// console.log(pickOnCountry);
// console.log(myDearArray2);

// console.log("************");
// console.log(`counts of my picked random values: ${countsOfMyPick} and the numbers of greater than 50 is ${countsOfMyPick.length}`);
// console.log(myDearArray);

// let dizimiz = ["tofaş",1,"toyota","reno","toyota",45,2,46,312,42,3,"renult","alfa","zen"]
// dizimiz.push("xxx")//sona ekle
// dizimiz.unshift("yyy")//başa ekle
// dizimiz.shift();//baştan sil
// dizimiz.pop();//sondan sil
// dizimiz.sort()//diziyi alfabetik sırala(sayıları en öne alır ama alfabetik olarak sıralar. bunu aşmak için aşağıda bir adet küçükbasa fonksyonu yazdım)
// dizimiz.reverse();//012345 indexlere sahip diziyi 543210 şeklinde sırala
// function kucukbasa(a,b) {
//     if(a>b){
//         return 1;
//     }
//     if(a==b){
//         return 0;
//     }
//     if(a<b) return -1;
// }
// dizimiz.sort(kucukbasa);
// console.log(dizimiz);

// console.log(dizimiz.indexOf("reno")); //reno dizinin hangi sırasındadır?
// console.log(dizimiz.includes("reno"));//reno dizide varsa true döndürür
// console.log(benimdizim);
// console.log(benimdizim.splice(1,3));//[1] [2] [3]. dizi elemanlarını döndürür
// console.log(benimdizim.slice);//[1] [2] döndürür
// console.log("sa");

// let category = 'ambulans';

// switch (category) {
//     case 'telefon':
//         console.log('04410230441');
//         break;
//     case 'bilgisayar':
//         console.log('ofcourse'); 
//         break;
//     case 'savas':
//         console.log("here is your ak-49");
//         break;

//     default:
//         console.log("kanki aradığın şeyi bulamadık");
// }

// let date;

// switch (new Date().getFullYear()) {
//     case 2020:
//         console.log(`sene 2020`);
//         break;
// }

// switch (new Date().getDay()) {
//     case 1:
//         console.log('pazartesi');
//         break;
//     case 2:
//         console.log("salı");
//         break;
//     case 3:
//         console.log("çarşamba");
//         break
//     case 4:
//         console.log("perşembe");
//         break
//     case 5:
//         console.log("cuma");
//         break;
//     case 6:
//         console.log("cumartesi");
//         break;
//     case 7:
//         console.log("pazar");
//         break;
// }

// switch (new Date().getDay()) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("hafta içi");
//         break;
//     case 6:
//     case 0:
//         console.log("hafta sonu");
//         break;
// }

//**************örnek 1 */

// let tirafigeCikisTarihi = new Date(2017,4,20,0,0,0)
// let tarihYilSimdi = new Date().getFullYear();

// let bakimYil = tarihYilSimdi - tirafigeCikisTarihi.getFullYear();


// switch(bakimYil){
//     case 3: 
//         console.log(`eh sende 3 yıl olmuş bakım yaptır artık`);
//         break;
//     case 2:
//         console.log("bakım zamanınız çoktan geçti");
//     case 1:
//         console.log("bakım yaptırmanız tavsiye edilir");
// }

//****************örnek 2  */

// let tirafigeCikisTarihi = new Date (2019,5,15);
// tirafigeCikisTarihi.setHours(0,0,0,0);
// let tirafigeCikisTarihiMs = tirafigeCikisTarihi.getTime();

// let guncelTarih = Date.now();

// let TrafiktekiMs = guncelTarih-tirafigeCikisTarihiMs;

// let gun = TrafiktekiMs / (1000*60*60*24);
// console.log(`gecen gun ${Math.floor(gun)}`);

// console.log(`yil : ${Math.floor(gun/365)}`);

var result = prompt("Hello anyone there ?", "Yes Or No");

switch (result.toLowerCase()) {
    case 'hell yes':
    case 'yes':
        let result2 = prompt("are you embarrassed?","1 or 0");
        if (result2 == true && !isNaN(result2))
            console.log("welcome big boy no be shy ");
        else console.log("go away");
        break;
    case 'no':
        console.log("Go out kid");
            
}















