// Optional parameter pada function

const getDataString = (val1: string, val2?: string) :string => {
    return val1 + " " + val2
}

console.log(getDataString("Rafi"))
// ketika parameter 2 tidak diisi maka akan diisi undefined

const getDataNumber = (val1: number, val2: number): string => {
    return val1 + " " + val2
}

console.log(getDataNumber(10, 20))


