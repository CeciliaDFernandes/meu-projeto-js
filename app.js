const prompt = require("prompt-sync")();

// 1) Risco de crédito
function avaliarRiscoDeCredito(rendaMensal, dividaAtual) {
  const renda = parseFloat(rendaMensal);
  const divida = parseFloat(dividaAtual);
  const TE = (divida / renda) * 100;

  if (TE < 10) return "Risco Baixo";
  if (TE < 30) return "Risco Moderado";
  return "Risco Alto";
}

const rendaInput = prompt("Informe sua renda mensal: ");
const dividaInput = prompt("Informe sua dívida atual: ");
const resultado = avaliarRiscoDeCredito(rendaInput, dividaInput);
console.log(`Renda: R$ ${rendaInput} | Dívida: R$ ${dividaInput}`);
console.log(`Classificação: ${resultado}`);

// 2) Array
const numeros = prompt("Digite números separados por vírgula: ")
  .split(",")
  .map(n => parseFloat(n.trim()))
  .filter(n => !isNaN(n));

console.log("Array:", numeros);
console.log(`Maior: ${Math.max(...numeros)} | Menor: ${Math.min(...numeros)}`);
console.log("Dobro:", numeros.map(n => n * 2));
console.log("Maiores que 5:", numeros.filter(n => n > 5));

// 3) Objeto
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  exibirInfo() {
    console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano}`);
  }
};
carro.exibirInfo();
carro.cor = "Preto";
carro.ano = 2025;
console.log(carro);

// 4) Classe Livro
class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }
  detalhes() {
    console.log(`Livro: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano}`);
  }
}
const l1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const l2 = new Livro("1984", "George Orwell", 1949);
l1.detalhes();
l2.detalhes();

// 5) Palíndromo
const palavra = prompt("Digite uma palavra: ");
console.log(`Quantidade de caracteres: ${palavra.length}`);
const invertida = palavra.split("").reverse().join("");
const ehPalindromo = palavra.toLowerCase() === invertida.toLowerCase();
console.log(ehPalindromo ? `"${palavra}" É palíndromo.` : `"${palavra}" NÃO é palíndromo.`);
