/*
5.) No aeroporto, os passageiros embarcam no avião seguindo a ordem de check-in.
A sequência inicial de passageiros é:
* Passageiro A
* Passageiro B
* Passageiro C
* Passageiro D
* Passageiro E
a) Crie um objeto filaAeroporto e insira os passageiros na fila corretamente.
b) Imprima a fila antes do início do embarque.
c) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o
nome dele.
d) Imprima a fila após a remoção.
ESTRUTURA DE DADOS - PROF. ALEXANDRE GOMES
e) Três novos passageiros fizeram check-in:
* Passageiro F
* Passageiro G
* Passageiro H
Adicione-os à fila.
f) Imprima a fila após as alterações.
g) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.
h) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.
*/

import Queue from '../lib/Queue.mjs'

// a) Crie um objeto filaAeroporto e insira os passageiros na fila corretamente.
const filaAeroporto = new Queue()
filaAeroporto.enqueue("Passageiro A")
filaAeroporto.enqueue("Passageiro B")
filaAeroporto.enqueue("Passageiro C")
filaAeroporto.enqueue("Passageiro D")
filaAeroporto.enqueue("Passageiro E")

// b) Imprima a fila antes do início do embarque.
console.log("Fila antes do embarque: ", filaAeroporto.print())

// c) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.
const primeiroPassageiro = filaAeroporto.dequeue()
console.log("Primeiro passageiro chamado para embarque: ", primeiroPassageiro)

// d) Imprima a fila após a remoção.
console.log("Fila após remoção: ", filaAeroporto.print())

// e) Três novos passageiros fizeram check-in:
filaAeroporto.enqueue("Passageiro F")
filaAeroporto.enqueue("Passageiro G")
filaAeroporto.enqueue("Passageiro H")

// f) Imprima a fila após as alterações.
console.log("Fila após adição de novos passageiros: ", filaAeroporto.print())

// g) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.
const proximoPassageiro = filaAeroporto.peek()
console.log("Próximo passageiro a embarcar: ", proximoPassageiro)

// h) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.
const passageiroRemovido = filaAeroporto.dequeue()
console.log("Próximo passageiro chamado: ", passageiroRemovido)
console.log("Fila após remoção: ", filaAeroporto.print())
