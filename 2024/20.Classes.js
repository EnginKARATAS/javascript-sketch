//design a class for employee whick takes id an name in during constuction of object and has salary property
class Employee {
  constructor(id, name) {
    if (!id || !name) throw Error("name or id fiels missing");
    this.id = id;
    this.name = name;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getSalary() {
    return this.salary;
  }
  setSalary(salary) {
    this.salary = salary;
  }
}

class Manager extends Employee{
    setDepartment(department){
        this.department = department;
    }
    getDepartment(){
        return this.department;
    }
}

const employee = new Employee(113, "Rufus");
employee.setSalary(120000)
console.log(employee.name, " ", employee.id, " ", employee.salary);

const manager = new Manager(114, "Jasica")
manager.setDepartment("IT");
console.log(manager);

//Write with prototype syntax
console.log("---prototype---");
var Employee2 = function (id, name){
  if (!id || !name) throw Error("name or id fiels missing");
    this.id = id;
    this.name = name;
}

Employee2.prototype.getId = function() {
  return this.id
}

Employee2.prototype.getName = function() {
  return this.name;
}

Employee2.prototype.getSalary = function() {
  return this.salary;
}
Employee2.prototype.setSalary = function (salary) {
  this.salary = salary;
}

const employee2 = new Employee2(113, "Rufus");
employee.setSalary(120000)
console.log(employee.name, " ", employee.id, " ", employee.salary);