
import { KUTYALISTA } from "./adat.js"
import Kutyak from "./Kutyak.js"



const szuloELEM=document.querySelector(".tarolo")
const KedvencElem=document.querySelector(".kedvenc")

new Kutyak(KUTYALISTA,szuloELEM)


const KEDVENCLISTA=[]

window.addEventListener("kevenc", function (event){
    console.log(event.detail)
    KEDVENCLISTA.push(KUTYALISTA[event.detail])
    console.log(KEDVENCLISTA)
   new Kutyak(KEDVENCLISTA,KedvencElem)


})
