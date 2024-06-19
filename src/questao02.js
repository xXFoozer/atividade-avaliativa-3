import leia from "readline-sync"

var qh = leia.questionInt("Quantas horas voce trabalha: ");
var vh= leia.questionInt("Quanto voce ganha por hora: ");
var pd = leia.questionInt("Qual o seu percentual de Deconto: ");

var sb = vh*qh 
var desc= sb*(pd/100)
var sl = sb - desc

console.log("Seu salario liquido é: "+ sl+ "\n Seu salario bruto é:"+ sb);