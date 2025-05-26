/*
1.) Utilizando o arquivo "PILHA" da pasta "lib".
Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
e após cada uma das operações a seguir:
push(5)
push(9)
pop()
push(3)
push(8)
pop()
pop()
push(6)
push(2)
pop()
push(10)
push(1)
pop()
pop()
push(15)
pop()
pop()
*/

import Stack from '../lib/Stack.mjs'
const pilha = new Stack()

console.log("Estado inicial da pilha: ", pilha.print());
pilha.push(5);
console.log("Estado da pilha após push(5): ", pilha.print());
pilha.push(9);
console.log("Estado da pilha após push(9): ", pilha.print());
pilha.pop();
console.log("Estado da pilha após pop(): ", pilha.print());
pilha.push(3)
console.log("Estado da pilha após push(3): ", pilha.print());
pilha.push(8)
console.log("Estado da pilha após push(8): ", pilha.print());
pilha.pop()
console.log("Estado da pilha após pop(): ", pilha.print());
pilha.pop()
console.log("Estado da pilha após pop(): ", pilha.print());
pilha.push(6)
console.log("Estado da pilha após push(6): ", pilha.print());
pilha.push(2)
console.log("Estado da pilha após push(2): ", pilha.print());
pilha.pop()
console.log("Estado da pilha após pop(): ", pilha.print());
pilha.push(10)
console.log("Estado da pilha após push(10): ", pilha.print());
pilha.push(1)
console.log("Estado da pilha após push(1): ", pilha.print());
pilha.pop()
console.log("Estado da pilha após pop(): ", pilha.print());
pilha.pop()
console.log("Estado da pilha após pop(): ", pilha.print());
pilha.push(15)
console.log("Estado da pilha após push(15): ", pilha.print());
pilha.pop()
console.log("Estado da pilha após pop(): ", pilha.print());
pilha.pop()
console.log("Estado da pilha após pop(): ", pilha.print());

