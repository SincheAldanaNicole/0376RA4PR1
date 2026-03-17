//RA3Ex7 - Activitats ràpides DOM JS

//1 - Selecció: Usa querySelector per canviar el color d'un <h1> quan la pàgina carregui.
let h1 = document.querySelector("#titol-principal");
h1.style.color = "blue"; 

//2 - Contingut: Fes que un paràgraf <p> mostri "Hola Món" usant textContent.
let p = document.querySelector("#paragraf-hola");
p.textContent = "Hola Món";

//3 - Atributs: Canvia la 'src' d'una imatge <img> usant setAttribute.
let src = document.querySelector("#imatge-canviant");
src.setAttribute("src","https://laboratoriolinux.es/images/stories/2024/08/linux-_1_.jpg");

//4 - Estils: Canvia el color de fons (backgroundColor) d'un element en fer-li clic.
let fons = document.querySelector("#caixa-estil");
fons.addEventListener("click", function(){
    fons.style.backgroundColor = "red";
});

//5 - Classes: Crea un botó que afegeixi/tregui la classe 'actiu' amb classList.toggle.
let botoToggle = document.querySelector("#boto-toggle");
let textClasse = document.querySelector("#text-classe");

botoToggle.addEventListener("click", function(){
    textClasse.classList.toggle("actiu");
});

//6 - Esdeveniments: Afegeix un addEventListener a un botó perquè tregui una alerta (alert).
let botoAlerta = document.querySelector("#boto-alerta");

botoAlerta.addEventListener("click", function(){
    alert("Hola! Has fet clic al botó.");
});

//7 - Estructura: Crea un nou <li> amb createElement i afegeix-lo a una <ul> amb appendChild.
let botoAfegir = document.querySelector("#boto-afegir");
let llista = document.querySelector("#llista-compra");

botoAfegir.addEventListener("click", function(){
    let nouItem = document.createElement("li");
    nouItem.textContent = "Nou producte";
    llista.appendChild(nouItem);
});

//8 - Eliminació: Fes que un element desaparegui en fer-li clic usant el mètode remove().
let elementEliminar = document.querySelector("#element-eliminar");

elementEliminar.addEventListener("click", function(){
    elementEliminar.remove();
});