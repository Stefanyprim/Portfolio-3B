function somaArray(array) {
    var soma = 0;
  
    for (var i = 0; i < array.length; i++) {
      soma += array[i];
    }
  
    return soma;
  }
  console.log(somaArray([2, 3, 4, 5, 6])); 
  console.log(somaArray([7, -8, 9, 10])); 
  console.log(somaArray([])); 
  console.log(somaArray([200]));