function melhoresAlunos(estudantes) {
    var melhorAluno = null;
    var melhorMedia = -Infinity;
  
    for (var aluno in estudantes) {
      var notas = estudantes[aluno];
      var somaNotas = notas.reduce(function(acumulador, nota) {
        return acumulador + nota;
      }, 0);
  
      var media = somaNotas / notas.length;
  
      if (media > melhorMedia) {
        melhorAluno = aluno;
        melhorMedia = media;
      }
    }
  
    return { nome: melhorAluno, media: melhorMedia };
  }
  var notasEstudantes = {
    Stefany: [7, 8.5, 3.5, 5],
    Alice: [9, 4.5, 6.5, 7],
    Lucas: [1.5, 5.4, 4.6, 9]
  };
  
  console.log(melhoresAlunos(notasEstudantes));