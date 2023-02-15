// typescript adalah bahasa pemrograman beroriesntasi objek yang dibuat oleh microsoft
// typescript merupakan bahasa pemrograman yang di compile menjadi code javascript
// menggunakan typescript akan membuat kode lebih mudah dibaca di debug dibandingkan menggunakan javascript
// typescript dalah bahasa pemrograman strongly type (seperti java, C#, C dan C++
// typescript code ---> tsc(typescript compiler) ---> javascript code 
// reference: typescriptlang.org, github.com/microsoft/Typescript 

function SayHello(nama: string) {
    return `Hello ${nama}`;   
} 

let response: string = SayHello("Rafi");

console.log(response)
 