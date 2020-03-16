//Exercicio 5

function calculaNota (notaPratica,notaTeorica) {
    notaFinal = ((notaPratica+notaTeorica)/2);
    if (notaFinal >= 10)
    return ("Aprovado.")
    else
    return ("Reprovado.")

}


var notaPrat = 10;
var notaTeo = 11;

//console.log(calculaNota(notaPrat,notaTeo));



//Exercicio 6

function returnMonthValue (month) {
    switch (month) {
        case 1 : return ("Janeiro");
        break;
        case 2 : return ("Fevereiro");
        break;
        case 3 : return ("Março");
        break;
        case 4 : return ("Abril");
        break;
        case 5 : return ("Maio");
        break;
        case 6 : return ("Junho");
        break;
        case 7 : return ("Julho");
        break;
        case 8 : return ("Agosto");
        break;
        case 9 : return ("Setembro");
        break;
        case 10 : return ("Outubro");
        break;
        case 11 : return ("Novembro");
        break;
        case 12 : return ("Dezembro");
        break;
        default : return ("Valor inválido.")
        break; 
    }
}

// console.log(returnMonthValue(13));

//Exercicio 7

function calculator (value1,value2,symbol) {
    if (symbol == "+"){
        return (value1 + "+" + value2 + "=" + (value1+value2))
    }
    else if (symbol == "-"){
        return (value1 + "-" + value2 + "=" + (value1-value2))
    }
    else if (symbol == "*"){
        return (value1 + "*" + value2 + "=" + (value1*value2))
    }
    else if (symbol == "/"){
        return (value1 + "/" + value2 + "=" + (value1/value2))
    }
    else if (symbol == "^"){
        var total = value1;
        for (let i = 1; i < value2; i++) {
            total = total * value1; 
        }
        return (value1 + "^" + value2 + "=" + total)
    }
    else {
        return ('N/A');
    }

}

// console.log (calculator(2,4,'^'));



//Exercicio 8

function multiplesOfFive(value) {

for (let i = 1; i < value; i++) {
    if ((i % 5) == 0){
        console.log(i)
    }
}

}

// multiplesOfFive(20);




//Exercicio 9

function sumOf (value) {
    soma = 0;
    for (let i= 1; i < value; i++) {
        soma += i;        
    }
    return (soma);
}

// console.log(sumOf(100));





//Exercicio 10

function calculateFact (value) {
    var fact = 1;
    for (let i = value; i >= 1 ; i--) {
        fact = fact * i;
    }
    return (fact);
}

// var v = calculateFact(5);
// console.log (v)




//Exercicio 11

var array = [2, 3, 7, 8, 1];

function calculateAverage (array){
    var sum= 0;
    var average = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    average = sum / array.length;
    return (average);
}

// console.log(calculateAverage(array));



function getMax(array){
    var max = array [0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= max){
            max = array[i];
        }
    }
    return (max);
}

// vmax = getMax(array);
// console.log(vmax)



function getMin(array){
    var min = array [0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] <= min){
            min = array[i];
        }
    }
    return (min);
}

// vmin = getMin(array);
// console.log(vmin)