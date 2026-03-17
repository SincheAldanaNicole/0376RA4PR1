# 0376RA4PR1 - Documentació
Este documento explica paso a paso un pequeño script en JavaScript que trabaja con el **DOM** (la estructura de una página web).

---

## ¿Qué hace este script?
El script realiza varias acciones sobre elementos de una página web. como:
- Cambiar colores
- Modificar textos
- Añadir o eliminar elementos
- Responder a clics de botones

---

## Ejercicios y soluciones 

### 1.-Selección de elementos
Cambiamos el color de un título `<h1>` cuando carga la página.
`let h1 = document.querySelector("#titol-principal"); h1.style.color = "blue";`
Selecciona el elemento por su `id` y cambia su color a azul.

---

### 2.-Cambiar contenido 
Mostramos el texto "Hola Món" dentro de un párrafo `<p>`.
`let p = document.querySelector("#paragraf-hola"); p.textContent = "Hola Món";`
Cambia el texto del párrafo.

---

### 3.-Cambiar atributos
Modificamos la imagen cambiando su atributo `src`.
`let src = document.querySelector("#imatge-canviant"); src.setAttribute("src","https://laboratoriolinux.es/images/stories/2024/08/linux-_1_.jpg");`
 Cambia la imagen que se muestra.

---

### 4.-Cambiar estilos con clic
Al hacer clic en un elemento, cambia su color de fondo.
`let fons = document.querySelector("#caixa-estil"); fons.addEventListener("click", function(){ fons.style.backgroundColor = "red"; });`
Cuandos haces clic el fondo se vuelve rojo.

---

### 5.-Añadir o quitar clases
Un botón activa o desactiva una clase llamada `actiu`.
`let botoToggle = document.querySelector("#boto-toggle"); let textClasse = document.querySelector("#text-classe"); botoToggle.addEventListener("click", function(){ textClasse.classList.toggle("actiu"); });`
Sirve para cambiar estilos usando clases CSS.

---

### 6.-Mostrar alerta 
Un botón muestra una alerta cuando haces clic.
`let botoAlerta = document.querySelector("#boto-alerta"); botoAlerta.addEventListener("click", function(){ alert("Hola! Has fet clic al botó."); });`
Aparece un mensaje en pantalla.

---

### 7.-Crear elementos
Añadimos un nuevo elemento `<li>` a una lista `<ul>`.
`let botoAfegir = document.querySelector("#boto-afegir"); let llista = document.querySelector("#llista-compra"); botoAfegir.addEventListener("click", function(){ let nouItem = document.createElement("li"); nouItem.textContent = "Nou producte"; llista.appendChild(nouItem); });`
Cada clic añade un nuevo producto a la lista.

---

### 8.-Eliminar elementos
Un elemento desaparece al hacer clic.
`let elementEliminar = document.querySelector("#element-eliminar"); elementEliminar.addEventListener("click", function(){ elementEliminar.remove(); });`
El elemento se elimina de la página.

---

## Conclusión 
Este script me a ayudado a aprender a:
- Seleccionar elementos
- Modificar contenido
- Manejar eventos (clics)
- Crear y eliminar elementos

---

Gracias profesor Edu :p