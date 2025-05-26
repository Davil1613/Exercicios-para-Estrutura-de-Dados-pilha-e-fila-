/*
3.) Um banco tem um sistema de senhas para organizar o atendimento ao público.
Os clientes chegam e pegam uma senha. A ordem de chegada é:
Cliente 101
Cliente 102
Cliente 103
Cliente 104
ESTRUTURA DE DADOS - PROF. ALEXANDRE GOMES
Cliente 105
a) Crie um objeto filaBanco e insira os clientes na ordem correta.
b) Imprima a fila antes do atendimento.
c) O primeiro cliente foi chamado e atendido. Remova esse cliente da fila e imprima o
nome dele.
d) Imprima a fila após a remoção.
e) Dois novos clientes pegaram senha:
Cliente 106
Cliente 107
Adicione-os à fila.
f) Imprima a fila após as alterações.
g) Qual é o próximo cliente a ser atendido? Mostre o comando e o número da senha.
h) O atendente chamou o próximo cliente. Remova essa pessoa e imprima a fila atualizada.
*/

import Queue from '../lib/Queue.mjs'

// a) Crie um objeto filaBanco e insira os clientes na ordem correta.
const filaBanco = new Queue()
filaBanco.enqueue("Cliente 101")
filaBanco.enqueue("Cliente 102")
filaBanco.enqueue("Cliente 103")
filaBanco.enqueue("Cliente 104")
filaBanco.enqueue("Cliente 105")

// b) Imprima a fila antes do atendimento.
console.log("Fila antes do atendimento: ", filaBanco.print())

// c) O primeiro cliente foi chamado e atendido. Remova esse cliente da fila e imprima o nome dele.
const clienteAtendido = filaBanco.dequeue()
console.log("Cliente atendido: ", clienteAtendido)

// d) Imprima a fila após a remoção.
console.log("Fila após a remoção: ", filaBanco.print())

// e) Dois novos clientes pegaram senha:
filaBanco.enqueue("Cliente 106")
filaBanco.enqueue("Cliente 107")

// f) Imprima a fila após as alterações.
console.log("Fila após as alterações: ", filaBanco.print())

// g) Qual é o próximo cliente a ser atendido? Mostre o comando e o número da senha.
console.log("Próximo cliente a ser atendido: ", filaBanco.peek())

// h) O atendente chamou o próximo cliente. Remova essa pessoa e imprima a fila atualizada.
const proximoCliente = filaBanco.dequeue()
console.log("Cliente atendido: ", proximoCliente)
console.log("Fila atualizada: ", filaBanco.print())