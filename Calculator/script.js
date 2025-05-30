const btn = document.querySelectorAll('.button')
const display = document.querySelector('.display')

let string = ''
const buttons = Array.from(btn)

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string);
                display.value = string;
            } catch {
                display.value = 'Error';
                string = '';
            }
        }else if(value === 'Clear'){
            display.value = ''
        }
        else {
            string += value;
            display.value = string;
        }
    });
});