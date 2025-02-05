// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Deben haber al menos dos participantes para sortear.");
        return;
    }
    
    let sorteados = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let opciones = sorteados.filter(n => n !== amigos[i]);
        
        if (opciones.length === 0) {
            alert("No se pudo realizar el sorteo. Inténtelo nuevamente.");
            return;
        }
        
        let elegido = opciones[Math.floor(Math.random() * opciones.length)];
        resultado.push({ amigo: amigos[i], secreto: elegido });
        
        sorteados = sorteados.filter(n => n !== elegido);
    }
    
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    resultado.forEach(par => {
        const li = document.createElement("li");
        li.textContent = `${par.amigo} → ${par.secreto}`;
        listaResultado.appendChild(li);
    });
}