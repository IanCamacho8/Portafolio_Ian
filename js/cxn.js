import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA183jJn-GJQ_7pqSlm6ffj51QyZ6j6FBQ",
    authDomain: "form-portafolio-c63b2.firebaseapp.com",
    projectId: "form-portafolio-c63b2",
    storageBucket: "form-portafolio-c63b2.firebasestorage.app",
    messagingSenderId: "885808828583",
    appId: "1:885808828583:web:087d61143abf12012c0b82",
    measurementId: "G-06H48VF4F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//wconst analytics = getAnalytics(app);//
const db = getFirestore(app);


const form = document.getElementById("contacto-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    const fecha = new Date();

    try {
        await addDoc(collection(db, "Clientes"),{
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            fecha: fecha

        });
        console.log("Datos enviados");
        alert("Solicitud enviada");
        form.reset();
    } catch (error) {
        console.log("Error al enviar datos");
        alert("Hubo un error al enviar datos");


    }

})
