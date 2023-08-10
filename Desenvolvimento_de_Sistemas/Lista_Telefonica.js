function listaTelefonica(nome) {
const contatos = {
"Stefany" : "98455-7260",
"Léo" : "99944-6442",
"Alice" : "99926-0895",
"Lucas": "98408-3127",
 };

 if (nome in contatos) {
return `Nome: ${nome}, Telefone: ${contatos[nome]}`;
} else {
return 'Telefone não encontrado.';
}
}

const nome = 'Léo';
const telefone = listaTelefonica(nome);
console.log(telefone);