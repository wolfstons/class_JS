export default class Kutya {

  #obj = {};
  #index
  constructor(obj = { kep, nev },index, szuloElem) {
    
      this.#obj = obj;
      this.szuloElem = szuloElem;
      this.#index=index
      this.megjelenit();
      this.esemenykezelo();
    
  }
  esemenykezelo() {

    const buttonElem = document.querySelector(".kartya:last-child button");
    console.log(buttonElem)
    buttonElem.addEventListener("click", (event) => {
      this.sajatesemeny();
      
    });
  }

  sajatesemeny() {

    const e = new CustomEvent("kevenc", { detail: this.#index });
    console.log(this.#index)
    window.dispatchEvent(e);

  }

  megjelenit() {
    let kod = `<div class="kartya">
                <img src="${this.#obj.kep}" alt="${this.#obj.nev}" />
                <p>${this.#obj.nev}</p><button>asd</button></div>`;

    this.szuloElem.insertAdjacentHTML("beforeend", kod);
  }
  getobj() {
    return this.#obj;
  }

  setobj(ertek) {
    if (ertek == "oltott") {
      this.#obj.oltott = true;
    } else if (ertek == "nem oltott") {
      this.#obj.oltott = false;
    } else {
      console.log("nem megfelelo ertek");
    }
    console.log(this.#obj);
  }
}
