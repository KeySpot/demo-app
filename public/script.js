async function onAdd() {
    let variableName = document.getElementById("new-variable").value;
    let list = document.getElementById('list');

    const res = await fetch('/variables', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({[variableName]: null}),
    });
    const data = await res.json();

    list.innerHTML += `<li id="${variableName}">${variableName}: ${data[variableName]} <button onclick="onDelete(${variableName})">x</button></li>`;
}

function onDelete(element) {
    element.remove();
}