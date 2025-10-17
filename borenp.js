let datable=document.getElementById("estudiantes") 
let estData =[ 
    { 
        nombre:"AAAA", 
        edad:11, 
        pais:"PAIS1", 
        notas:[11.2, 22.3, 33.4] 
    }, 
    { 
        nombre:"BBBB", 
        edad:22, 
        pais:"PAIS2", 
        notas:[11.2, 22.3, 33.4] 
    }, 
    { 
        nombre:"CCCC", 
        edad:11, 
        pais:"PAIS3", 
        notas:[11.2, 22.3, 33.4] 
    } 
] 

estData.forEach((est)=>{ 
datable.innerHTML += 
`<tr> 
<td>${est.nombre}</td> 
<td>${est.edad}</td> 
<td>${est.pais}</td> 
<td>${(est.notas.reduce((acumulador, valorActual) => acumulador + valorActual, 0))/est.notas.length}</td> 
</tr> `
})