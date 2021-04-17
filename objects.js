//inheritance yapılabilmesi için js de prototype kullanılmalıdır
//class oluşturmak jsde = constructor oluşturumak 

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.GetCount = function () {
    return 100;
}

let patatesKisi = new Person("crazy","max");
console.log(patatesKisi.name);
console.log(patatesKisi.surname);
console.log(patatesKisi.GetCount());
console.log(patatesKisi);

