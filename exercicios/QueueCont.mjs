/*
Exercício 6: Fila
Desafio: Modifique a classe Queue para contar quantas operações foram feitas na
fila.
Regras:
1. Crie uma variável privada #operationCount para contar quantas operações
foram realizadas (enqueue e dequeue).
2. Adicione um método getOperationCount() que retorna o total de operações
feitas.
3. Teste essa funcionalidade simulando uma fila de atendimento ao cliente.
*/


export default class Queue {

    #data       // Vetor privado
    #operationCount = 0 // Contador privado de operações

    constructor() {
        this.#data = []     // Vetor vazio
        this.#operationCount = 0
    }

    // Método para inserção na fila
    enqueue(val) {
        this.#data.push(val)
        this.#operationCount++
    }

    // Método para remoção da fila
    dequeue() {
        this.#operationCount++
        return this.#data.shift()    
    }

    // Método para consultar o início da fila sem remover o elemento
    peek() {
      return this.#data[0]
    }

    // Getter para informar se a fila está ou não vazia
    // (propriedade somente leitura)
    get isEmpty() {
      return this.#data.length === 0
    }

    // Método que imprime a fila (para efeitos de depuração)
    print() {
      let output = '[ '
      for(let i = 0; i < this.#data.length; i++) {
        if(output !== '[ ') output += ', '
        output += `(${i}): ${this.#data[i]}`
      }
      return output + ' ]'
    }

    // Método para obter o total de operações
    getOperationCount() {
      return this.#operationCount
    }
}

// --- Teste da funcionalidade ---
// Simulando uma fila de atendimento ao cliente

const fila = new Queue();

console.log('Fila inicial:', fila.print());
fila.enqueue('Cliente 1');
fila.enqueue('Cliente 2');
fila.enqueue('Cliente 3');
console.log('Fila após 3 chegadas:', fila.print());

fila.dequeue(); // Atende Cliente 1
console.log('Fila após atender 1 cliente:', fila.print());

fila.enqueue('Cliente 4');
console.log('Fila após chegada do Cliente 4:', fila.print());

fila.dequeue(); // Atende Cliente 2
fila.dequeue(); // Atende Cliente 3
console.log('Fila após atender mais 2 clientes:', fila.print());

console.log('Total de operações realizadas:', fila.getOperationCount());