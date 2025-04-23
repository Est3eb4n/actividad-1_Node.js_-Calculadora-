function sumar(n1,n2){
    return n1+n2;
}

function restar(n1,n2){
    return n1-n2;
}

function multi(n1,n2){
    return n1-n2;
}

function divition(n1,n2){
    return n1-n2;
}

function display(value){
    document.getElementById('display').value +=value;
}

function clearDisplay(){
    documen.getElementById('result').value = '';
}

function backspace() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

async function calculate() {
    const expression = document.getElementById('result').value;
    
    try {
        const response = await fetch('/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ expression })
        });
        
        const data = await response.json();
        
        if (data.error) {
            document.getElementById('result').value = 'Error';
        } else {
            document.getElementById('result').value = data.result;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').value = 'Error';
    }
}

// Luego se exportan los elementos delarados


export {sumar, restar, multi, divition, display, clearDisplay, backspace, calculate}