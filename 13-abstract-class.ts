// abstract class merupakan class yang tidak dapat diinstansiasi langsung dari luar class itu sendiri melainkan harus meng extens sebuah class childnya

abstract class Kendaraan {

    abstract roda: number

    start(): void {
        console.log("Bruuummmm")
    }
}

class Mobil extends Kendaraan {
     roda: number = 4
}

class Motor extends Kendaraan {
    roda: number = 2
}

let mobil = new Mobil()
console.log(mobil.roda);
mobil.start();

let motor = new Motor()
console.log(motor.roda);
motor.start();