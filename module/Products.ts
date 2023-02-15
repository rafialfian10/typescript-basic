import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus("Zenbook", true, true);
console.log(asus)
asus.a();
asus.b();
asus.c();

let macbook = new Macbook(2017, false, false);
console.log(macbook)
macbook.a();
macbook.b();
macbook.c();