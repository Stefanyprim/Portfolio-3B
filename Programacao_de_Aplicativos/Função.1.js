function verificarMaiorOuIgual(numero1, numero2) {
    if (numero1 > numero2) {
    return "O primeiro número é maior que o segundo.";
  } else if (numero1 < numero2) {
    return "O primeiro número é menor que o segundo.";
  } else { numero1 = numero2
    return "O primeiro número é igual ao segundo.";
  }
}

console.log(verificarMaiorOuIgual(5,8));
console.log(verificarMaiorOuIgual(3,3)); 
console.log(verificarMaiorOuIgual(4,2)); 