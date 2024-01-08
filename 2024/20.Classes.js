//design a class for employee whick takes id an name in during constuction of object and has salary property
class Employee {
  constructor(id, name, department) {
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
