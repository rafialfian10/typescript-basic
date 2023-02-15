class User {
    public name: string;
    // public age: number;

    constructor(name: string, public age: number ) {
        this.name = name;
        // this.age = age;
    }
    // data tidak harus diinisialisasi terlebih dahulu, dan bisa langsung masuk di constructor 
}

let user = new User("Rafi Alfian", 24);
console.log(user);