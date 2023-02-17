function addContactsToBody(contact) {
    const nDiv = document.createElement("div");
    nDiv.className = "contacts";
    nDiv.innerHTML = `${contact.nombre} ${contact.apellido} ${contact.telefono}`;
    return nDiv;
}

function getContacts() {
    const data = fetch("http://www.raydelto.org/agenda.php").then(function (result) {
        return result.json();
    }).then(async function (result) {
        for(let i of result) {
            const contact = i;
            const lista = document.getElementById("contacts");
            lista.appendChild(addContactsToBody(await contact));
        }
    });
}

function formToJSON(form) {
    const data = new FormData(form);
    const value = Object.fromEntries(data.entries());
    const obj = JSON.stringify(value);
    return obj;
}

function enviarJSON(form) {
    let check = document.forms["form"]["nombre"].value;
    if (check == "") {
        alert("Llene los campos del formulario");
    } else {
        console.log(formToJSON(form));
        fetch("http://www.raydelto.org/agenda.php", {
            method: 'POST',
            body: formToJSON(form),
        });
    }
    document.getElementById("form").reset();
}

