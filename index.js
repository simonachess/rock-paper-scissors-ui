const resultDOM = document.querySelector('#result')
const choicestDOM = document.querySelector('#choices')
const scoreDOM = document.querySelector('#score')
const winnerDOM = document.querySelector('#winner')

const choices = ['rock', 'paper', 'scissors']



const handleClick = (e) => {
    playRound(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])

}

choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicestDOM.appendChild(button)
})

let playerScore = 0
let computerScore = 0
const playRound = (playerSelection, computerSelection) => {
    if (playerScore < 5 && computerScore < 5) {
        switch (playerSelection + computerSelection) {
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                resultDOM.innerHTML = `You WIN! ${playerSelection} beats ${computerSelection}`
                playerScore++
                break
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                resultDOM.innerHTML = `You LOSE! ${computerSelection} beats ${playerSelection}`
                computerScore++
                break
            case 'scissorsscissors':
            case 'paperpaper':
            case 'rockrock':
                resultDOM.innerHTML = `It is DRAW ${playerSelection} = ${computerSelection}`
                break
        }
    }

    scoreDOM.innerHTML = `You won ${playerScore} time(s), Computer won ${computerScore} time(s)`

    if (playerScore === 5) {
        winnerDOM.innerHTML = `YOU are the WINNER`
        return
    }
    if (computerScore === 5) {
        winnerDOM.innerHTML = `COMPUTER is the WINNER`
        return
    }
}
