import leia from "readline-sync"

var produt= leia.questionFloat("valor do produto: ")
 if (produt < 20){
    var valor = produt + (produt* 0.45) 
    console.log("R$:"+valor)
 }else if(produt > 20){
    var valor = produt + (produt* 0.30) 
    console.log("R$:" + valor)
 }