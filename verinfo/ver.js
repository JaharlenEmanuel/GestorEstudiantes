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


  let formulario = document.querySelector("#crud-modal form"); 
  let lista = document.getElementById("lista-alumnos");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault(); 

   
    const nombre = formulario.querySelector("#name").value;
    const edad = formulario.querySelector("#price").value;
    const pais = formulario.querySelector("#category").value;
    const notas = formulario.querySelector("#description").value;

 
   let li = document.createElement("li");
    li.textContent = `Nombre: ${nombre}, Edad: ${edad}, País: ${pais}, Notas: ${notas}`;

    
    lista.appendChild(li);

   
  });



