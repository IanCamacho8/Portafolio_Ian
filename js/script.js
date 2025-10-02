document.addEventListener("DOMContentLoaded", () => {
    //Almacenamos los id a trabajar dentro de sus variables modal - modalImg
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const cerrar = document.querySelector(".cerrar");
 
    const imagenes = document.querySelectorAll(".flip-card-back img");
 
    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });
 
    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });
 
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


/*
let nombres = "Ian Camacho";
let datos = ["Ian Camacho", "SENATI", "estudiante"];

console.log(nombres);
console.log(datos[2]);

/*let edad = prompt("Ingresa tu edad: ");

console.log(edad);*/

//works// 
/*
function mostrarMensaje(){
    alert("hola mundo");
}

function sumar(){
    let n1 = parseInt(prompt("ingresa tu numero: "));
    let n2 = parseInt(prompt("ingresa otro numero: "));
    alert("El resultado es: "+ (n1 + n2));
}

function cambiarColor(){
    let texto = document.getElementById("texto");
    texto.style.color="red";


}
*/