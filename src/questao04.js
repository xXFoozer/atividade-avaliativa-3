import n from "readline-sync"

var nota = n.questionInt("Digite uma nota de 0 a 10\n")

if (nota < 0 || nota > 10){
    console.log("Digitte uma nota VALIDA!!!!!")
}else if(nota >= 9){
        console.log("A")
    }else if (nota >= 8){
        console.log("B")
    }else if (nota >= 7){
        console.log("C")
    }else if(nota >= 6){
        console.log("D")
    }else if(nota < 6){
        console.log("F")
    }










