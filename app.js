document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const result = document.getElementById('result');
    const error = document.getElementById('error');
    const factorialButton = document.getElementById('factorialButton');
    const calculatorButton = document.getElementById('calculatorButton'); 
   
 
    
    numberInput.addEventListener('keydown', function(event) {
     
        if (!((event.key >= '0' && event.key <= '9') || event.key === 'Backspace' || event.key === 'Enter')) {
            event.preventDefault();
        }
    });

    
    numberInput.addEventListener('keyup', function(event) {
        const value = numberInput.value;

       
        if (value === '') {
            result.textContent = '';
            error.textContent = '0';
            return;
       
        }

    
        if (isNaN(value) || parseInt(value) < 0) {
            error.textContent = 'Please enter a valid positive number';
            result.textContent = '';
        } else {
            error.textContent = '';
            const factorial = calculateFactorial(parseInt(value));
            result.textContent = `Factorial of ${value} is ${factorial}`;
           
        }
    });
    factorialButton.addEventListener('keydown', function(event) {
         if (event.key === 'Enter')  {
                 const value = numberInput.value;
                  if (!isNaN(value) && parseInt(value) >= 0) { 
                    const factorial = calculateFactorial(parseInt(value));    
                result.textContent = `Factorial of ${value} is ${factorial}`; 
            } 
        } 
    });
    calculatorButton.addEventListener('keydown', function(event) {
         if (event.key === 'Enter') { 
            window.open('https://www.calculator.net', '_blank'); } });
  


    function calculateFactorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * calculateFactorial(num - 1);
        }
    }

});

