let display = document.getElementById('input');
let buttons = document.querySelectorAll('.buttons>div>button');
let popup = document.getElementById('popup');
let darkMode = document.querySelector('.darkMode');
let container = document.getElementById('container');
let calculator = document.querySelector('.calculator');
let toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    container.classList.toggle('container-dark');
    calculator.classList.toggle('calculator-dark');
    display.classList.toggle('input-dark');
    popup.classList.toggle('popup-dark');
    buttons.forEach(function(button) {
      button.classList.toggle('button-dark')
    });
  } else {
    container.classList.toggle('container-dark');
    calculator.classList.toggle('calculator-dark');
    display.classList.toggle('input-dark');
    popup.classList.toggle('popup-dark');
    buttons.forEach(function(button) {
      button.classList.toggle('button-dark')
    });
  }
});


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        let buttonValue = buttons[i].innerText
    if (buttonValue === 'C'){
        display.value = '';
        display.style.fontSize = '35px'
    } else if (buttonValue === '←'){
        display.value = display.value.slice(0, -1);
    }else if (buttonValue === '=') {
        display.value = eval(display.value)
    } else {  if (display.value.length < 20){
            display.value += buttonValue;
            } else {
                popup.style.display = 'block';
                setTimeout(function() {
                  popup.style.display = 'none';
                }, 3000);
              };
            if (display.value.length > 14) {
                display.style.fontSize = '25px';
            } else {
                display.style.fontSize = '35px'
            }
        }
    });
}