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

let mice = new User("Rose", "rose@gmail.com", "43klu@");
mice.getInformation()
mice.getPersonalDetails()

// inheritance

class SpecialEmployee extends User{
    constructor(username, email, password, yahoo){
        super(username, email,password)
        this.yahoo = yahoo;
    }

    userYahoo(){
        console.log("your yahoo is ", this.yahoo);
    }
}
let adimn = new SpecialEmployee("Rose", "rose@gmail.com", "43klu@", "rosella@yahoo.com");
adimn.userYahoo()
adimn.getInformation()
adimn.getPersonalDetails()