abstraction

function Employee(name ,age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    let monthlyBonus = 10000;

    let getFinalSalary = function(){
        let finalSalary = salary + monthlyBonus;
        console.log(finalSalary)
    }

     this.getDetails = function(){
        console.log("Name: " + this.name  +"\n age: " + this.age)
        getFinalSalary()
    }

}

let details = new Employee("Ronald", 24, 30000)
details.monthlyBonus = 1000
details.getDetails()