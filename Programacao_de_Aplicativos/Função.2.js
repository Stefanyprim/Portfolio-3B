function calcularQuantidadeDeDias (Idade){
    if (Idade < 0){
    return "Idade inválida, digite um valor não negativo.";
} else{
    var quantidadeDeDias = Idade * 365
    return "Quantidade de dias correspondente com a idade é: " + quantidadeDeDias + " dias.";
}
}

console.log(calcularQuantidadeDeDias(28));
console.log(calcularQuantidadeDeDias(-53));
console.log(calcularQuantidadeDeDias(40));