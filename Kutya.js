export default class Kutya {
  /*írj ey osztályt ami meg jeleniti a kutyát
   és hozzá rendelünk viselkedést*/
  //viselkedés-cslelekvés-tulajdonság
  #obj = {};
  constructor(obj = { kep, nev }, szuloElem) {
    {
      this.#obj = obj;
      this.szuloElem = szuloElem;
      this.megjelenit();
      /*this.kep = obj.kep;
      this.nev = obj.nev;*/
    }
    const buttonElem=document.querySelector(".kartya:last-child button")
    console.log(buttonElem)
    buttonElem.addEventListener("click",function(event){
        console.log(event.target)
    })


  }
  megjelenit() {
    let kod = `<div class="kartya">
                <img src="${this.#obj.kep}" alt="${this.#obj.nev}" />
                <p>${this.#obj.nev}</p><button>asd</button></div>`;

    this.szuloElem.insertAdjacentHTML("beforeend",kod);
  }
  getobj(){
    return this.#obj
  }

  
  setobj(ertek){
    if (ertek=="oltott"){
      this.#obj.oltott=true  
    }else if (ertek=="nem oltott"){
        this.#obj.oltott=false
    }else{
        console.log("nem megfelelo ertek")
    }
    console.log(this.#obj)
  }



}
