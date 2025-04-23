import * as pantalla from './operation.js';


document.getElementById('display').addEventListener("click",(event) =>{
    event.preventDefault();
    
    document.getElementById('result').innerText=pantalla
})