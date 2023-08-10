function segundoMaiorNumero(array) {
    
        if (array.length < 2) {
          return "O array precisa ter pelo menos dois números.";
        }
      
        var maior = Math.max.apply(null, array);
      
        var arraySemMaior = array.filter(function(numero) {
          return numero !== maior;
        });
      
        var segundoMaior = Math.max.apply(null, arraySemMaior);
      
        return segundoMaior;
      }
      console.log(segundoMaiorNumero([4, 5, 6, 7, 8])); 
      console.log(segundoMaiorNumero([6, 8, 4, 3])); 
      console.log(segundoMaiorNumero([200, 300, 400, 500])); 
      console.log(segundoMaiorNumero([64]));
    