let boton = document.querySelector("button[data-modal-toggle='crud-modal']");
let modal = document.getElementById("crud-modal");

boton.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex"); 
      const botonCerrar = modal.querySelector("button[data-modal-toggle='crud-modal']");
  botonCerrar.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
  })
});


