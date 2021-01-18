const tipo=document.getElementById('tipo');
const nombre=document.getElementById('nombre');
const dueno=document.getElementById('dueno');
const form=document.getElementById('form');
const btnGuardar=document.getElementById('btn-guardar');
const listaMascotas=document.getElementById('lista-mascotas');

let mascotas=[
{
    tipo: "Gato",
    nombre: "Manchas",
    dueno: "Esteban"
},
];

function listarMascotas(){
    const htmlMascotas = mascotas.map((mascota,indice)=>`<tr>
    <td scope="col">${indice}</td>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
        <div class="btn-group" role="group" >
             <button class="btn btn-primary" type="button"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger" type="button" ><i class="far fa-trash-alt"></i></button>
        </div>
    </td>
    </tr>`).join("");
    listaMascotas.innerHTML=htmlMascotas;

}

function enviarDatos(evento){
    evento.preventDefault();
    const datos={
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    mascotas.push(datos);
    listarMascotas();
}

listarMascotas();

form.onsubmit=enviarDatos;
btnGuardar.onclick=enviarDatos;
