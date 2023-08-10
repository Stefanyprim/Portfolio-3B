function filtro(array) {
    var numeros = [];
  
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        numeros.push(array[i]);
      }
    }
  
    return numeros;
  }
  console.log(filtro(["Js", 1, "hoje", 3, 5, 8, "teste"])); 
  console.log(filtro(["teste", "tentativa"])); 
  console.log(filtro([3, "quatro", 5, "seis", 7])); 
  console.log(filtro([10, 20, "trinta", 40, 50]));