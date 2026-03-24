export function megjelenit(obj = { kep, nev }, szuloelem) {

let kod = `      <div class="kartya">
<img src="${obj.kep}" alt="${obj.nev}" />
<p>Morzsi</p></div>

`;

szuloelem.innerHTML+=kod
}