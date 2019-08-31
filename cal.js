function calculate(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operators').value;

    switch(operator){
        case '+':
            document.getElementById('result').value = num1 + num2;
            break;
        case '-':
            document.getElementById('result').value = num1 - num2;
            break;
        case '*':
            document.getElementById('result').value = num1 * num2;
            break;
        case '/':
            document.getElementById('result').value = num1 / num2;
            break;
        case '%':
            document.getElementById('result').value = num1 % num2;
            break;
        case 'CE':
            document.getElementById('num1').value = 0;
            document.getElementById('num2').value = 0;
            document.getElementById('result').value = 0;
            break;

    }
}

document.getElementById('button').addEventListener('click', calculate);






