function multiplicacaoSemOperador(a, b) {
    // Caso base: se um dos números for igual a zero, a multiplicação é zero
    if (a === 0 || b === 0) {
      return 0;
    }
  
    // Caso especial: se um dos números for igual a um, a multiplicação é o outro número
    if (a === 1) {
      return b;
    }
    if (b === 1) {
      return a;
    }
  
    // Caso geral: realiza a multiplicação através da recursão
    if (a > b) {
      return a + multiplicacaoSemOperador(a, b - 1);
    } else {
      return b + multiplicacaoSemOperador(a - 1, b);
    }
  }

console.log(multiplicacaoSemOperador(3, 8));  
console.log(multiplicacaoSemOperador(6, 16)); 
console.log(multiplicacaoSemOperador(9, 20));