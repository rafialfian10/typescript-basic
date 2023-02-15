//tipe data enum berfungsi apabila data yang kita punya sudah fix, maka data tersebut dapat disimpan didalam enum. misalnya tipe data jenis kelamin.

enum Gender {Male, Fenale, Unknown};
// enum Gender {Male= 0, Female= 1, Unknown= 99} // number dapat kita tentukan sendiri defaulnya
let jenis_kelamin1: Gender = Gender.Male;
console.log(jenis_kelamin1); 
// hasilnya akan menjadi 0, karena defaultnya enum adalah tipe data number


// enum string
enum jenisKelamin {
    Male = "Pria",
    Female = "Wanita",
    Unknown = "Kosong"
}

let jenis_kelamin2: jenisKelamin = jenisKelamin.Female
console.log(jenis_kelamin2); 