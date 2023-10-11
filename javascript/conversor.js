
function calc(){

    const temperaturaInput = document.querySelector('#temperatura');
    const resultado = document.getElementById('staticNumber');
    const temperatura = parseFloat(temperaturaInput.value);
    const celsiusChek = document.getElementById('celsius');
    const fahChek = document.getElementById('Fahrenheit');
    




    if (celsiusChek.checked && fahChek.checked) {
       
        resultado.textContent = 'Por favor, escolha apenas uma opção: Graus (°C) ou Graus Fahrenheit (°F).';

    } else if (isNaN(temperatura)) {
        
        resultado.textContent = 'Por favor, insira um valor numérico válido.';

    } else if (celsiusChek.checked) {
        
        const fahrenheit = (temperatura * 9/5) + 32;
        resultado.textContent = `Em Fahrenheit (°F): ${fahrenheit.toFixed(2)}`;

    } else if (fahChek.checked) {
        
        const celsius = (temperatura - 32) * 5/9;
        resultado.textContent = `Em Graus Celsius (°C): ${celsius.toFixed(2)}`;

    } else {
        resultado.textContent = 'Selecione uma opção: Graus (°C) ou Graus Fahrenheit (°F).';
    }
}
