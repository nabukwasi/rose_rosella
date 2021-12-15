// classes
class Person{
    constructor(name,id,residence,nationality){
        this.name =name;
        this.id = id;
        this.residence = residence;
        this.nationality = nationality
    }


}
let firstPerson = new Person("Katongole Edgar", "U3268/012", "makindye", "Ugandan");
console.log(firstPerson);

// classes with constructors
class User{
    constructor(username, email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getInformation(){
        console.log("your username is ", this.username )
    }

    getPersonalDetails(){
        console.log("your email is ", this.email, " and password is", this.password  )
    }
}

let mik = new User("Edgar", "edgar@gmail.com", "43klu@");
mik.getInformation()
mik.getPersonalDetails()

// classes
class Employees{
    constructor(gmail,passWord){
        this.gmail = gmail;
        this.passWord = passWord;
    }

    getInformation(){
        console.log("your email is ", this.gmail )
    }

    getPersonalDetails(){
        console.log("your email is ", this.gmail, " and password is", this.passWord  )
    }
}

let rose = new Employees( "edgar@gmail.com", "jhbklu@");
rose.getInformation()
rose.getPersonalDetails()


// classed 
function Employee(name ,age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.monthlyBonus = 10000;

    this.getFinalSalary = function(){
        let finalSalary = this.salary + this.monthlyBonus;
        console.log(finalSalary)
    }

     this.getDetails = function(){
        console.log("Name: " + this.name  +"\n age: " + this.age)
    }

}

let details = new Employee("Edgar", 24, 30000)
// someone can change the monthly the monthly bonus
details.monthlyBonus = 20000;

details.getDetails()

details.getFinalSalary()