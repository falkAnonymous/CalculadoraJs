let calculation = ''; // Variável para armazenar a expressão matemática

function appendNumber(number) {
    calculation += number; // Adiciona o número à expressão
    updateOutput(); // Atualiza a saída na calculadora
}

function appendOperator(operator) {
    calculation += operator; // Adiciona o operador à expressão
    updateOutput(); // Atualiza a saída na calculadora
}

function clearCalculator() {
    calculation = ''; // Limpa a expressão
    updateOutput(); // Atualiza a saída na calculadora
}

function calculate() {
    let result = '';
    try {
        result = eval(calculation); // Avalia a expressão matemática usando a função eval()
    } catch (error) {
        result = 'Erro de expressão'; // Exibe uma mensagem de erro se a expressão for inválida
    }
    calculation = result.toString(); // Atualiza a expressão com o resultado
    updateOutput(); // Atualiza a saída na calculadora
}

function updateOutput() {
    const outputElement = document.querySelector('.result');
    outputElement.textContent = calculation; // Atualiza o conteúdo da saída da calculadora
}
