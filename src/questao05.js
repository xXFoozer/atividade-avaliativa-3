import leia from "readline-sync"
var valor1= leia.questionInt("Digite Valor 1: ")
var valor2= leia.questionInt("Digite Valor 2: ")
var valor3= leia.questionInt("Digite Valor 3: ")

if(valor1 >=  valor2+ valor3){
    console.log("Triangulo invalido")
}else if(valor2 >= valor1+ valor3){
    console.log("Triangulo invalido")
}else if( valor3>= valor1+ valor2 ){
    console.log("Triangulo invalido")
}

if (valor1 = valor2){
    console.log("Equilátero: todos os lados iguais;")
}else if(valor3 = valor1){
    console.log("Equilátero: todos os lados iguais;")
}
else if(valor1 === valor2 ||valor1 === valor3){
    console.log("Isósceles: dois lados iguais;")
}else if(valor1 != valor2 || valor1 != valor3){
    console.log(" Escaleno: todos os lados diferentes;")
}