/*
2.) Veja, na imagem "Torre-De-Hanoi-4-Discos.png" (em anexo na tarefa), como funciona o
jogo das Torres de Hanoi com 4 discos. Cada uma das torres do jogo se comporta como uma pilha.
Em hipótese alguma, um disco maior pode ficar sobre um disco menor. Importe a classe apropriada
"PILHA" da pasta "lib" e crie três pilhas, representando as três torres. Comece o jogo com os
4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].
Implemente o método correto que move um disco de uma torre para outra. Finalize o jogo com os
4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS, conforme
a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias, conforme imagem
Torre-Impressao.png (em anexo na tarefa).
*/

import Stack from '../lib/Stack.mjs'

const torreA = new Stack()
const torreB = new Stack()
const torreC = new Stack()

torreB.push(1)
torreB.push(2)
torreB.push(3)
torreB.push(4)
console.log("Estado inicial das torres:");
console.log("Torre A: ", torreA.print());
console.log("Torre B: ", torreB.print());
console.log("Torre C: ", torreC.print());

// Função para mover um disco de uma torre para outra
function moverDisco(origem, destino) {
    if (origem.isEmpty) {
        console.log("A torre de origem está vazia. Não é possível mover nenhum disco.");
        return;
    }
    const disco = origem.pop();
    destino.push(disco);
}

moverDisco(torreB, torreC);
moverDisco(torreB, torreA);
moverDisco(torreC, torreA);
moverDisco(torreB, torreC);
moverDisco(torreA, torreB);
moverDisco(torreA, torreC);
moverDisco(torreB, torreC);
moverDisco(torreB, torreA);
moverDisco(torreC, torreA);
moverDisco(torreC, torreB);
moverDisco(torreA, torreB);
moverDisco(torreC, torreA);
moverDisco(torreB, torreC);
moverDisco(torreB, torreA);
moverDisco(torreB, torreC);
moverDisco(torreC, torreA);


// Exibindo o estado final das torres
console.log("Estado final das torres:");
console.log("Torre A: ", torreA.print());
console.log("Torre B: ", torreB.print());
console.log("Torre C: ", torreC.print());