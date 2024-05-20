const API_KEY = "https://api.exchangerate-api.com/v4/latest/"; // Chave API

const moedas = { // constante das moedas que vai mapear os codigos
    BRL: "Real Brasileiro",
    USD: "Dólar Americano",
    EUR: "Euro",
    
};

function converterMoeda(moedaOrigem, valor, moedaDestino) {
    const url = `https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`;

    fetch(url) //para realizar uma requisição à API usando a URL construída. 
        .then((response) => response.json())
        .then((data) => {
            const taxaCambio = data.rates[moedaDestino];
            const valorConvertido = valor * taxaCambio;// aqui onde acontece o calculo para saber o quanto equivale uma moeda para outra

            const resultado = document.getElementById("resultado"); // onde vai aparecer o resultado
            resultado.innerHTML = `
                ${valor} ${moedas[moedaOrigem]} =
                ${valorConvertido.toFixed(2)} ${moedas[moedaDestino]}
            `;
        });
}

document.addEventListener("submit", (event) => {//ele vai ser acionado depois do usuario cliaar do botão "cpnverter"
    event.preventDefault(); // previne que a pagijna seja recarregada permitindo que o código JavaScript lide com o envio do formulário

    const moedaOrigem = document.getElementById("moeda_origem").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const moedaDestino = document.getElementById("moeda_destino").value; // aqui onde os dados serão captados apos o usuario mandar o formulário

    converterMoeda(moedaOrigem, valor, moedaDestino);
});

