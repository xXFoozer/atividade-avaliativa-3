import n from "readline-sync";

var nota1 = n.questionFloat("Primeira nota: ");
var peso1 = n.questionFloat("Peso da Primeira nota: ");
var nota2 = n.questionFloat("Segunda nota: ");
var peso2 = n.questionFloat("Peso da Segunda nota: ");
var nota3 = n.questionFloat("Terceira nota: ");
var peso3 = n.questionFloat("Peso da Terceira nota: ");



var mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

console.log("A media ponderada desse aluno é: "+ mediaPonderada);