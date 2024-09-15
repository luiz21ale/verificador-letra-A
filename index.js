function verificarLetraA() {
    // Obtém o valor do input
    let texto = document.getElementById("palavra").value;
    
    // Converte todo o texto para minúsculas para verificar tanto 'a' quanto 'A'
    let textoMinusculo = texto.toLowerCase();
    
    // Conta a quantidade de vezes que a letra 'a' aparece
    let quantidadeA = (textoMinusculo.match(/a/g) || []).length;
    
    // Mostra o resultado na página
    let resultado = document.getElementById("resultado");
    if (quantidadeA > 0) {
        resultado.textContent = `A letra 'a' aparece ${quantidadeA} vez(es) no texto.`;
    } else {
        resultado.textContent = "A letra 'a' não foi encontrada no texto.";
    }
}