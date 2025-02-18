let tentativas = []; // Inicializa um array vazio para armazenar os nomes

function adicionarAmigo(nome) {
    tentativas.push(nome); // Adiciona o nome ao array tentativas
    atualizarListaAmigos(); // Atualiza a lista exibida
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar
    tentativas.forEach(amigo => {
        const li = document.createElement('li'); // Cria um novo elemento li
        li.textContent = amigo; // Define o texto do li como o nome do amigo
        listaAmigos.appendChild(li); // Adiciona o li à lista
    });
}

function sortearAmigo() {
    if (tentativas.length === 0) {
        alert('Não há amigos para sortear.'); // Alerta se não houver amigos
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * tentativas.length); // Gera um índice aleatório
    let amigoSorteado = tentativas[indiceAleatorio]; // Retorna o nome do amigo sorteado
    exibirResultado(amigoSorteado); // Exibe o resultado
}