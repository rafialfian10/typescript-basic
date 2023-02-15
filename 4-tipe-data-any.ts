// tipe data any merupakan tipe data yang mana kita bisa mengisi tipe data apapun

let datastudent1: any = "Rafi";
datastudent1 = 21;
datastudent1 = true || false;
datastudent1 = [];
datastudent1 = {};
console.log(datastudent1);
// tipe data any valuenya dapat diubah menjadi tipe data apapun

let datastudent2: any[] = ["Rafi", 21, true];
console.log(datastudent2)