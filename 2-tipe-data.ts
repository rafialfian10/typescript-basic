// package npm install -g ts-node berfungsi agar setiap kali running tidak perlu compile terlebih dahulu. Dan cara memanggilnya ts-node namaFile.ts

// tipe data

//string
let nama: string = "Rafi";
nama = nama + " Alfian";

let hello = `Hello, my name is ${nama}`
console.log(hello);

// boolean
let isDone: boolean = false;
isDone = true;
console.log(isDone);
  
// number
let age: number = 24;
age = 20;
console.log(age);

// array 
let names: string[] = ["Rafi", "Dawam", "Chandra"]; // cara 1
let numbers: Array<number> = [1, 2, 3, 4, 5]; // cara 2

console.log(names);
console.log(numbers);
  
// tuple (tipe data yang dapat diisikan apapun tetapi ada batas isi dari array telah ditentukan)
let student: [string, number, boolean] = ["Rafi", 21, true];
console.log(student[0])
console.log(student[1])
console.log(student[2])

// add value in array
let addValue: string[] = [];
addValue.push("One");
addValue.push("Two");
addValue.push("Three");
console.log(addValue);

// delete value in array
delete addValue[2];
console.log(addValue);

  