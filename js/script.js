async function getContacts() {
    const data = await fetch("http://www.raydelto.org/agenda.php").then(function (result) {
        return result.json();
    }).then(function (result) {
        for(let i of result) {
            const contact = i;
            const lista = document.getElementById("contacts");
            lista.appendChild(addContactsToBody(contact));
        }
    });
}

console.log(getContacts());

function addContactsToBody(contact) {
    const nDiv = document.createElement("div");
    nDiv.className = "contacts";
    nDiv.innerHTML = `${contact.nombre} ${contact.apellido} ${contact.telefono}`;
    return nDiv;
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

