let estudianteActual = null;

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("editar")) {
    const id = parseInt(e.target.dataset.id);
    estudianteActual = estudiantes.find((est) => est.id === id);

    document.getElementById("nombre").value = estudianteActual.nombre;
    document.getElementById("edad").value = estudianteActual.edad;
    document.getElementById("pais").value = estudianteActual.pais;
    document.getElementById("notas").value = estudianteActual.notas;

    let modal = document.getElementById("modalEditar");
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    const botonCerrar = modal.querySelector(
      "button[data-modal-toggle='modalEditar']"
    );
    botonCerrar.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
  }
});

document.querySelector("#modalEditar form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (estudianteActual) {
    estudianteActual.nombre = document.getElementById("nombre").value;
    estudianteActual.edad = parseInt(document.getElementById("edad").value);
    estudianteActual.pais = document.getElementById("pais").value;
    estudianteActual.notas = document.getElementById("notas").value;
    renderTabla();

    let modal = document.getElementById("modalEditar");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});
