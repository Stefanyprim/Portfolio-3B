CREATE TABLE alunos (
  id INT,
  nome VARCHAR(100),
  curso VARCHAR(100)
);

CREATE TABLE notas (
  id INT,
  aluno_id INT,
  nota DECIMAL(4, 2)
);
INSERT INTO alunos (id, nome, curso)
VALUES
  (1, 'Stefany', 'Medicina Veterinaria'),
  (2, 'Lucas', 'Engenharia Mecanica');
  (3, 'Edu', 'Administracao'),

INSERT INTO notas (id, aluno_id, nota)
VALUES
  (1, 1, 7.5),
  (2, 1, 10.0),
  (3, 2, 8.5),
  (4, 2, 9.5),
  (5, 3, 7.0),
  (6, 3, 8.5);
SELECT alunos.nome, alunos.curso, AVG(notas.nota) AS media_notas
FROM alunos
JOIN notas ON alunos.id = notas.aluno_id
GROUP BY alunos.id, alunos.nome, alunos.curso
ORDER BY media_notas DESC;