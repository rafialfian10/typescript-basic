// function
const getName = (firtsname: string) => {
    return `hello my name is ${firtsname}`
} 
console.log(getName('rafi'))


// function return
function getName2(name: string):string {
    // return 10 (karena return di deklarasikan tipe string maka return harus string)
    return `Hello my name is ${name}`

}
console.log(getName2("Alfian"));


// function void (function tidak boleh me return apapun)
function getname3(fullname: string): void {
    console.log(`Hello my name is ${fullname}`)
}

getname3("Rafi Alfian");

const perkalian = (value1: number, value2: number): number => {
    return value1 * value2;
}

console.log(perkalian(10, 10))


// function as type
type pertambahan = (value1: number, value2: number) => number;

const add: pertambahan = (value1: number, value2: number): number => {
    return value1 + value2
}

console.log(add(20, 30))


// function default parameter
const fullname = (firstname: string, lastname: string = "Ganteng"): string => {
    return firstname + " " + lastname
}

console.log(fullname("Rafi"))


