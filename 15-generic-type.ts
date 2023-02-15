// generic type merupakan tipe data yang dinamis

function getData(value: any) {
    return value;
}

console.log(getData("Rafi Alfian").length);
console.log(getData(24).length);

// function yang mempunya generic
function myData<T>(value: T) { // T dapat diganti dengan nama apapun 
    return value
}

console.log(myData("Rafi Alfian").length);
console.log(myData(24));

// arrow function
const myData2 = <T> (value: T) => {
    return value
}

console.log(myData("Rafi Alfian").length);
console.log(myData(24));