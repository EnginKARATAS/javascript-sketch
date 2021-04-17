//inheritance yapılabilmesi için js de prototype kullanılmalıdır
//class oluşturmak jsde = constructor oluşturumak 

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
//inheritancenin jsdeki örneğidir. Person constructoru(nesnesi) oluşturulduğunda, oluşturan obje Personun GetCount özelliğini aynı şekilde çağırabilir. fakat getcount sadece personun protosunda oluşmuş olur. 
Person.prototype.GetCount = function () {
    return 100;
}

let patatesKisi = new Person("crazy","max");
console.log(patatesKisi.name);
console.log(patatesKisi.surname);
console.log(patatesKisi.GetCount());
console.log(patatesKisi);console.log("***********");

let meyve = {
    curumeOranı: function(){
        return 20
    }
}
// object.create meyve içindeki curumeOranı fonksyonunu ayvanın protosuna ekler.
let ayva = Object.create(meyve);
console.log(ayva);

