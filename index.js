/*jelenítsd meg a kutyát*/

//megjelenít megtodus
//kartya metodus
import Kutya from "./Kutya.js"

const kutya={
    kep:"kep/kutya.jpg",
    nev:"morzsi"
}
const kutya2={
    kep:"kep/kutya2.jpg",
    nev:"bodri"
}

const szuloELEM=document.querySelector(".tarolo")

const dog= new Kutya(kutya,szuloELEM)/*példányosítom az osztályt */
//példány neve dog
/*
console.log(dog)
console.log(dog.szuloElem)
console.log(dog.getobj())/*csak igy lehet olvasni mert privát az adattag */

const bodri=new Kutya(kutya2,szuloELEM)

/*a kuyta legyen oltotott */

bodri.setobj(true)
