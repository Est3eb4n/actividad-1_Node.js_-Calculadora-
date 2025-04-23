import { 
    appendToDisplay, 
    clearDisplay, 
    backspace, 
    calculate 
} from './operation.js';

// Manejo de botones numéricos y operadores
document.querySelectorAll('.display').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerText;
        const result = appendToDisplay(value);
        document.getElementById('result').value = result;
    });
});

// Botón de limpiar
document.getElementById('clearDisplay').addEventListener('click', () => {
    document.getElementById('result').value = clearDisplay();
});

// Botón de retroceso
document.getElementById('backspace').addEventListener('click', () => {
    document.getElementById('result').value = backspace();
});

// Botón de igual (=)
document.getElementById('calculate').addEventListener('click', () => {
    document.getElementById('result').value = calculate();
});