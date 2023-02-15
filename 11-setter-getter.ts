// setter dan getter
// setter berfungsi untuk validasi ketika ingin mengubah property pada class
// getter untuk mengambil data pada class

class User2 {
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

class Admin2 extends User2 {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";

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

let admin2 = new Admin2("08979638899", "Rafi Alfian", 24);
admin2.getName();
admin2.getRole();
admin2.setName("Ervin Alfianto");
admin2.phone;
admin2.email = "rafialfian770@gmail.com"

console.log(admin2)
