// sebuah property atau method yang dapat diakses langsung dalam class itu sendiri, tanpa perlu di instansiasi terlebih dahulu

class User3 {
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

class Admin3 extends User3 {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";
    static getRoleName: string = "Admin";

    // super constructor
    constructor(phone: string, name: string, age: number) {
        super(name, age); // super untuk memanggil constructor yang ada di parent class, karena di parent class terdapat 2 parameter. maka panngil 2 parameter
        this.phone = phone
    }

    static getNameRole() {
        return "Hello";
    }

    getRole(): {read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        }
    }

    // set (berfungsi untuk validasi data)
    set email(value: string) {
        if(value.length < 5) {
            this._email = "Email salah"
        } else {
            this._email = value;
        }
    }

    // get (berfungsi untuk mendapatkan data)
    get email(): string {
        return this._email
    }
}

let admin3 = Admin3.getRoleName;
console.log(admin3)
console.log(Admin3.getNameRole())

