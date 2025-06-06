document.addEventListener("DOMContentLoaded", () => {

    const btnModoNoche = document.createElement("button");
    btnModoNoche.textContent = "Modo oscuro";
    btnModoNoche.className = "btn btn-dark btn-sm text-white";

    const btnModoDia = document.createElement("button");
    btnModoDia.textContent = "Modo claro";
    btnModoDia.className = "btn btn-light btn-sm text-dark ms-2";

    const contenedorBotones = document.createElement("div");
    contenedorBotones.className = "ms-auto d-flex gap-2";
    contenedorBotones.appendChild(btnModoNoche);
    contenedorBotones.appendChild(btnModoDia);

    const navbar = document.querySelector(".navbar-collapse");
    if (navbar) {
        navbar.appendChild(contenedorBotones);
    }

    const modoNocheGuardado = localStorage.getItem("modoNoche");
    if (modoNocheGuardado === "true") {
        document.body.classList.add("modo-noche");
    }

    btnModoNoche.addEventListener("click", () => {
        document.body.classList.add("modo-noche");
        localStorage.setItem("modoNoche", "true");  
    });

    btnModoDia.addEventListener("click", () => {
        document.body.classList.remove("modo-noche");
        localStorage.setItem("modoNoche", "false"); 
    });
});

