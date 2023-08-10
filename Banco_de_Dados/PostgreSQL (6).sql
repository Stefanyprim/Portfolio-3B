CREATE TABLE clientes (
  id INT,
  nome VARCHAR(100),
  email VARCHAR(100)
);

CREATE TABLE pedidos (
  id INT,
  cliente_id INT,
  valor DECIMAL(10, 2)
);
INSERT INTO clientes (id, nome, email)
VALUES
  (1, 'Stefany', 'stefany_prim@estudante.sesisenai.org.br'),
  (2, 'Lucas', 'lucas_s_probst@estudante.sesisenai.org.br');

INSERT INTO pedidos (id, cliente_id, valor)
VALUES
  (1, 1, 30.00),
  (2, 1, 60.00),
  (3, 2, 90.00),
  (4, 2, 100.00);

SELECT clientes.nome, SUM(pedidos.valor) AS valor_total
FROM clientes
JOIN pedidos ON clientes.id = pedidos.cliente_id
GROUP BY clientes.id, clientes.nome
ORDER BY valor_total DESC;