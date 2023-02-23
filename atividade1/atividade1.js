let nomeProduto = "Robo Aspirador";
let precoProduto = 950;
const descontoProduto = 0.05;
//
let descontoValido = true;
let precoFinal = 0;

if (precoProduto > 900) {
  descontoValido = true;
  precoFinal = precoProduto - precoProduto * (descontoProduto * descontoValido);
}

if (precoProduto < 1000) {
  descontoValido = false;
  precoFinal = precoProduto;
}

console.log("Preço final: R$" + precoFinal + ".");

let demandas = [10, 2, 1, 30, 5];
let valoresPagos = [0];

for (let i = 0; i < demandas.length; i++) {
  let valorPago = demandas[i] * precoFinal;
  valoresPagos.push(valorPago);
  console.log("O cliente " + (i + 1) + " deve pagar: R$" + valorPago + ".");
}

let lucroTotal = valoresPagos.reduce((a, b) => a + b, 0);
{
  console.log("O lucro é de R$" + lucroTotal + ".");
}
