
let nomes = []; // Array para guardar os nomes dos participantes

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();
    if (nome) {
        nomes.push(nome);
        exibirParticipantes();
        nomeInput.value = '';
    } else {
        alert('Por favor, insira um nome.');
    }
}

function exibirParticipantes() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert('São necessários pelo menos 2 participantes para o sorteio.');
        return;
    }
    let sorteados = [...nomes];
    // Embaralha o array de forma aleatória
    for (let i = sorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]];
    }
    // Garante que ninguém tire a si mesmo
    for (let i = 0; i < nomes.length; i++) {
        if (sorteados[i] === nomes[i]) {
            // Troca com o próximo (ou anterior se for o último)
            if (i === nomes.length - 1) {
                [sorteados[i], sorteados[i - 1]] = [sorteados[i - 1], sorteados[i]];
            } else {
                [sorteados[i], sorteados[i + 1]] = [sorteados[i + 1], sorteados[i]];
            }
        }
    }
    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    for (let i = 0; i < nomes.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${nomes[i]} tirou ${sorteados[i]}`;
        resultado.appendChild(li);
    }
}