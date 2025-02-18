let tentativas = []; 

function adicionarAmigo(nome) {
    tentativas.push(nome); 
    atualizarListaAmigos(); 
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    tentativas.forEach(amigo => {
        const li = document.createElement('li'); 
        li.textContent = amigo; 
        listaAmigos.appendChild(li); 
    });
}

function sortearAmigo() {
    if (tentativas.length === 0) {
        alert('Não há amigos para sortear.'); 
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * tentativas.length); 
    let amigoSorteado = tentativas[indiceAleatorio]; 
    exibirResultado(amigoSorteado); 
}

function exibirResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
    const li = document.createElement('li'); 
    li.textContent = `Amigo sorteado: ${amigo}`; 
    resultado.appendChild(li); 
}

document.getElementById('botaoAdicionar').addEventListener('click', function() {
    let nome = document.getElementById('nomeAmigo').value; 
    if (nome) { 
        adicionarAmigo(nome); 
        document.getElementById('nomeAmigo').value = ''; 
    } else {
        alert('Por favor, digite um nome!'); 
    }
});