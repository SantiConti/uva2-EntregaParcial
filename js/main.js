document.addEventListener("DOMContentLoaded", () => {

    // Creo el botón de "Modo oscuro"
    const btnModoOscuro = document.createElement("button");
    btnModoOscuro.textContent = "Modo oscuro"; // Texto del botón
    btnModoOscuro.className = "btn btn-dark btn-sm text-white"; // Clases de Bootstrap para estilo

    // Creo el botón de "Modo claro"
    const btnModoClaro = document.createElement("button");
    btnModoClaro.textContent = "Modo claro"; // Texto del botón
    btnModoClaro.className = "btn btn-light btn-sm text-dark ms-2"; // Clases de Bootstrap para estilo

    // Creo un contenedor para los botones 
    const contenedorBotones = document.createElement("div");
    contenedorBotones.className = "ms-auto d-flex gap-2"; 
    contenedorBotones.appendChild(btnModoOscuro); 
    contenedorBotones.appendChild(btnModoClaro); 

    // Agrego el contenedor de botones dentro de la navbar
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar) {
        navbar.appendChild(contenedorBotones);
    }

    // Aplico la clase de modo oscuro si estaba activado
    const modoOscuroGuardado = localStorage.getItem("modoOscuro");
    if (modoOscuroGuardado === "true") {
        document.body.classList.add("modo-oscuro"); 
    }

    // Activo el modo oscuro al hacer click
    btnModoOscuro.addEventListener("click", () => {
        document.body.classList.add("modo-oscuro"); 
        localStorage.setItem("modoOscuro", "true");  // Guarda la activacion
    });

    // Activo el modo claro al hacer click
    btnModoClaro.addEventListener("click", () => {
        document.body.classList.remove("modo-oscuro"); 
        localStorage.setItem("modoOscuro", "false"); // Guarda la activacion
    });
});
