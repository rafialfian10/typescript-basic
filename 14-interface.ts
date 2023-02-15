// interface merupakan sebuah kontrak yang herus ada pada masing-masing class

interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;
    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }

    on(): void {
        console.log("Nyala");
    }

    off(): void {
        console.log("Mati");
    }
}

class MacBook implements Laptop {
    name: string;
    keyboardLight: boolean;

    constructor(name: string, keybordLight: boolean) {
        this.name = name;
        this.keyboardLight = keybordLight;
    }

    on(): void {
        console.log("Nyala");
    }

    off(): void {
        console.log("Mati");
    }
}

let asus = new Asus("Asus", true)
console.log(asus); 
console.log(asus.on());
console.log(asus.off());
let macbook = new MacBook("Macbook", true)
console.log(macbook); 
console.log(macbook.on());
console.log(macbook.off());