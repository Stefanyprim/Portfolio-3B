function repetir(elemento, quantidade) {
   
    if (typeof quantidade !== 'number' || quantidade < 0 || !Number.isInteger(quantidade)) {
      return "A quantidade deve ser um número inteiro não negativo.";
    }
  
    
    var arrayResultado = [];
  
   
    for (var i = 0; i < quantidade; i++) {
      arrayResultado.push(elemento);
    }
  
    return arrayResultado;
  }

console.log(repetir("teste", 5)); 
console.log(repetir(3, 9)); 
console.log(repetir("abc", 1)); 
console.log(repetir(4, -7)); 
console.log(repetir(true, 6));