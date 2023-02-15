// Inheritance / pewarisan

// public = dapat di akses disemua class / dari luar class
// protected = hanya dapat di akses dari class tersebut, dan class turunannya
// private = hanya dapat diskses dari class itu sendiri

class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setName(value1: string): void {
        this.name = value1;
    }

    getName = (): string => {
        return this.name;
    }
}

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;

    // super constructor
    constructor(phone: string, name: string, age: number) {
        super(name, age); // super untuk memanggil constructor yang ada di parent class, karena di parent class terdapat 2 parameter. maka panngil 2 parameter
        this.phone = phone
    }

    getRole(): {read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        }
    }
}

let admin = new Admin("08979638899", "Rafi Alfian", 24);
admin.getName();
admin.getRole();
admin.setName("Ervin Alfianto");

console.log(admin)