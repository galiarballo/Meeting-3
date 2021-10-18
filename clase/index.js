let formularios = []

function Formulario () {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad =document.getElementById("edad").value;
    let email=document.getElementById("email").value;
    let pais=document.getElementById("pais").value;
    let sexo=document.getElementById("sexo").value;
    let hobbie=document.getElementById("hobbies").value;
    

    if (nombre==="" || apellido===""||edad===""|| pais==="" ||email==="" ||sexo===""||hobbie===""){
        alert("Todos los campos son obligatorios");
        return false;
    }

    formularios.push(new formularios(nombre, apellido, edad, email, pais, sexo, hobbie));
    limpiarCampos();
    console.log(formularios);

}

function limpiarCampos(){
    document.getElementById("nombre").value=""
    document.getElementById("apellido").value=""
    document.getElementById("edad").value;
    document.getElementById("email").value=""
    document.getElementById("pais").value=""

}

