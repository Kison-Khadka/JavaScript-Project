const numberGuess = document.querySelector('.guessNumber')
const content = document.querySelector('.content')
const randomNum = Math.floor((Math.random() * 10) + 1)

document.querySelector('.guessBtn').addEventListener('click', () => {
    numGuessingGame()
})

function numGuessingGame(){
    const userGuess = parseInt(numberGuess.value);
    const newContent = document.createElement('div')

        content.innerHTML = ''

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10){
            newContent.textContent = "Please enter a number between 1 and 10."
        }
        else if (userGuess > randomNum){
            newContent.textContent = "Your guess is too high."
        }
        else if (userGuess < randomNum){
            newContent.textContent = "Your guess is too low."
        }else{
            newContent.textContent = "🎉 You win"
        }

        newContent.classList.add('div-content')
        content.appendChild(newContent)

        numberGuess.value = ''
}

        