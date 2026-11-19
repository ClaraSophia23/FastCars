const carros = [];

const formulario = document.getElementById("formCarro");
const campoModelo = document.getElementById("modelo");
const campoMarca = document.getElementById("marca");
const corpoTabela = document.getElementById("corpoTabela");

function exibir() {
    corpoTabela.innerHTML = "";

    for (let posicao = 0; posicao < carros.length; posicao++) {
        const carro = carros[posicao];

        corpoTabela.innerHTML += `
            <tr>
                <td>${posicao}</td>
                <td>${carro.modelo}</td>
                <td>${carro.marca}</td>
            </tr>
        `;
    }
}

// Inicia chamando a função para garantir que a tabela comece vazia
exibir();

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Impede a página de recarregar

    const carro = {
        modelo: campoModelo.value,
        marca: campoMarca.value
    };

    carros.push(carro); // Adiciona o novo carro no array

    exibir(); // Atualiza a tabela na tela
    formulario.reset(); // Limpa os campos do formulário
});