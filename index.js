
let sum = 0
let cardArr = []
let result = document.getElementById("result")
let sumContent = document.getElementById("sum")
let showCard = document.getElementById("cards")
let isAlive = true
let isWinner = false
let player={
    name: "Deepraj",
    balance: 28800
}


let showPlayer = document.getElementById("balance")
showPlayer.textContent = player.name + ": $" + player.balance

//randomcard generator

function randomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random === 1) {
        return 11
    }
    else if (random > 10) {
        return 11
    }
    else {
        return random
    }
}


//render game function
function renderGame() {
    showCard.textContent = "Cards: "
    for (let i = 0; i < cardArr.length; i++) {
        showCard.textContent += cardArr[i] + " "
    }
    sumContent.textContent = "Sum : "+sum
    if (sum === 21) {
        message = "Wohoo! You've got a Blackjack"
        isWinner= true
    }
    else if (sum < 21) {
        message = "Do you want to draw a new card"
    }
    else {
        message = "Ooops! You're out of the game"
        isAlive = false
    }

    result.textContent = message



}

//start game
function startGame() {
    sum = 0
    for(let i = cardArr.length; i>=0; i--){
        cardArr.pop()
    }
    isAlive= true
    isWinner = false
    let firstCard = randomCard()
    let secondCard = randomCard()
    cardArr = [firstCard, secondCard]
    sum = firstCard + secondCard
    console.log(sum)
    renderGame()


}

function newCard() {

    let newNum = randomCard()

    if (isAlive === true && isWinner === false) {
        sum += newNum
        console.log(sum)

        cardArr.push(newNum)

        renderGame()
    }
    else{
        result.textContent="Start a new Game"
    }

}
