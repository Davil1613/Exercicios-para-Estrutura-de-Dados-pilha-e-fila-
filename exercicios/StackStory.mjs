/*
Exercício 7: Pilha com Histórico de Remoções (Stack)
    Desafio: Modifique a classe Stack para armazenar um histórico dos elementos que 
    foram removidos (pop).
    Regras:
    ESTRUTURA DE DADOS - PROF. ALEXANDRE GOMES
    1. Crie um array privado #historyData para armazenar os elementos removidos.
    2. Adicione um método history() para retornar os elementos que já foram 
    retirados da pilha.
    3. Teste essa funcionalidade simulando uma pilha de navegação em um 
    navegador (ex: páginas visitadas e removidas).
*/
export default class Stack {

    #data       // Vetor privado
    #historyData = [] // Histórico de elementos removidos

    constructor() {
        this.#data = []     // Vetor vazio
        this.#historyData = [] // Inicializa o histórico vazio
    }

    // Método para inserção no vetor
    push(val) {
        this.#data.push(val)
    }

    // Método para remoção do vetor
    pop() {
        const removido = this.#data.pop()
        if(removido !== undefined) this.#historyData.push(removido)
        return removido
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

    // Método para retornar o histórico de elementos removidos
    history() {
        return [...this.#historyData]
    }
}

////////////////////////////////////////////////////////////////

// --- Teste da funcionalidade ---
// Simulando uma pilha de navegação em um navegador

const navegador = new Stack();

navegador.push('Página Inicial');
navegador.push('Página 1');
navegador.push('Página 2');
console.log('Pilha após visitar 3 páginas:', navegador.print());

navegador.pop(); // Sai da Página 2
console.log('Pilha após voltar uma página:', navegador.print());

navegador.push('Página 3');
console.log('Pilha após visitar Página 3:', navegador.print());

navegador.pop(); // Sai da Página 3
navegador.pop(); // Sai da Página 1
console.log('Pilha após voltar para a Página Inicial:', navegador.print());

console.log('Histórico de páginas removidas:', navegador.history());