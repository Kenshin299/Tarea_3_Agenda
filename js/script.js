function addContacts() {
    fetch("http://www.raydelto.org/agenda.php").then(function (resultado){
        return resultado.json();
    }).then(function (resultado) {
        const contact = resultado[0];
        const listadoContactos = document.getElementsByClassName("contacts");
        listadoContactos.innerHTML = contact.nombre + " " + contact.apellido + " " + contact.telefono;
    });
}

function formToJSON(form) {
    const data = new FormData(form);
    const value = Object.fromEntries(data.entries());
    const obj = JSON.stringify(value);
    document.getElementById("form").reset();
    console.log(obj);
    return obj;
}

function enviarJSON(form) {
    formToJSON(form);
}

