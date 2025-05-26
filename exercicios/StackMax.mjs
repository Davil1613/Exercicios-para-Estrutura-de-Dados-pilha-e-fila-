/*
 Exercício 8: Pilha com Capacidade Máxima
    Desafio: Modifique a classe Stack para ter um limite máximo de elementos.
    Regras:
    1. O tamanho máximo da pilha deve ser definido no construtor.
    2. Se a pilha atingir o limite, o método push() deve exibir uma mensagem de 
    erro e impedir a inserção.
    3. Teste essa funcionalidade simulando uma pilha de desfazer ações em um 
    editor de texto.
*/
export default class Stack {

    #data       // Vetor privado
    #maxSize    // Capacidade máxima da pilha

    constructor(maxSize) {
        this.#data = []     // Vetor vazio
        this.#maxSize = maxSize // Define o tamanho máximo
    }

    // Método para inserção no vetor
    push(val) {
        if(this.#data.length >= this.#maxSize) {
            console.error('Erro: Capacidade máxima da pilha atingida!')
            return
        }
        this.#data.push(val)
    }

    // Método para remoção do vetor
    pop() {
        return this.#data.pop()
    }

    // Método para consultar o topo (última posição) da pilha
    // sem remover o elemento
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // Getter para informar se a pilha está ou não vazia
    // (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0
    }

    // Método que imprime a pilha (para efeitos de depuração)
    print() {
        return JSON.stringify(this.#data) //O método JSON.stringify() converte valores em javascript para uma String JSON.
    }
}

////////////////////////////////////////////////////////////////

// --- Teste da funcionalidade ---
// Simulando uma pilha de desfazer ações em um editor de texto

const desfazer = new Stack(3); // Capacidade máxima de 3 ações

console.log('Pilha inicial:', desfazer.print());
desfazer.push('Ação 1');
desfazer.push('Ação 2');
desfazer.push('Ação 3');
console.log('Pilha após 3 ações:', desfazer.print());

desfazer.push('Ação 4'); // Deve exibir erro
console.log('Tentativa de adicionar Ação 4:', desfazer.print());

desfazer.pop(); // Desfaz última ação
console.log('Pilha após desfazer uma ação:', desfazer.print());

desfazer.push('Ação 5'); // Deve funcionar
console.log('Pilha após adicionar Ação 5:', desfazer.print());