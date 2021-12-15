// how to us a constructor function
class Laila{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }

    getAge(){
        return this.age
    }
    
}
let newRose = new Laila("Rose", 20);
console.log(newRose.getAge())