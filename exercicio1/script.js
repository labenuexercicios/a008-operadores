// # Exercício 1

// Construa um programa que:

// a) Peça ao usuário que insira um número **par**

// b) Imprima no console **o resto da divisão** desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código

// >💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número

const numeroPar = Number (prompt("Insira um número par."))

console.log(numeroPar%2)

// o padrão é que o resto da divisão sempre dá zero.

// se o usuário inserir um número impar o resto da divisão muda para 1