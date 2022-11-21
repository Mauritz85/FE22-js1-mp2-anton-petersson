const indexH1 = document.getElementById('index-h1')
const indexP = document.getElementById('index-p')
const nameInput = document.getElementById('name-input')
const beginBtn = document.getElementById('begin-btn')

let userPoint = 0
let computerPoint = 0

const header = document.createElement('header')
const h1User = document.createElement('h1')
const resultDisplay = document.createElement('h1')
resultDisplay.innerText = userPoint +' - ' + computerPoint
const h1Computer = document.createElement('h1')
h1Computer.innerText = 'Dator'

const instructionDiv = document.createElement('div')
const instructionP = document.createElement('p')
instructionP.innerHTML = 'Gör ditt val av "vapen" och tryck sedan på KÖR!'


const buttonDiv = document.getElementById('button-div')
const rockBtn = document.createElement('button')
rockBtn.innerHTML = 'Sten'
const scissorBtn = document.createElement('button')
scissorBtn.innerHTML = 'Sax'
const paperBtn = document.createElement('button')
paperBtn.innerHTML = 'Påse'
const arrowP = document.createElement('p')
arrowP.innerHTML = '=>'
const goBtn = document.createElement('button')
goBtn.innerHTML = 'KÖR!'

const choiceDiv = document.getElementById('choice-div')
const userChoiceDisplay = document.createElement('img')
const verdictDisplay = document.createElement('h3')
const computerChoiceDisplay = document.createElement('img')


const rockImg= "sten.png"
const scissorImg= "sax2.jpg"
const paperImg= "pase.png"

let userChoice
let result

beginBtn.addEventListener('click', beginGame)

function beginGame(event){
    nameInput.remove()
    beginBtn.remove()
    indexH1.remove()
    indexP.remove()
    document.body.appendChild(header)
    h1User.innerText = nameInput.value
    header.appendChild(h1User)
    header.appendChild(resultDisplay)
    header.appendChild(h1Computer)
    document.body.appendChild(instructionDiv)
    instructionDiv.appendChild(instructionP)
    document.body.appendChild(buttonDiv)
    buttonDiv.appendChild(rockBtn)
    buttonDiv.appendChild(scissorBtn)
    buttonDiv.appendChild(paperBtn)
    buttonDiv.appendChild(arrowP)
    buttonDiv.appendChild(goBtn)
    document.body.appendChild(choiceDiv)

}


rockBtn.addEventListener('click', assignChoice)
paperBtn.addEventListener('click', assignChoice)
scissorBtn.addEventListener('click', assignChoice)
goBtn.addEventListener('click',goFunction)



function assignChoice(event){
    userChoiceDisplay.remove()
    computerChoiceDisplay.remove()
    verdictDisplay.remove()
    event.preventDefault()
    if(event.target.textContent === 'Sten'){
        userChoice = rockImg
    }
    if(event.target.textContent === 'Sax'){
        userChoice = scissorImg
    }
    if(event.target.textContent === 'Påse'){
        userChoice = paperImg
    }

    userChoiceDisplay.src = userChoice
    choiceDiv.appendChild(userChoiceDisplay)


}

function goFunction(event){
    event.preventDefault()
    randomComputerChoice()
    getResult()
    choiceDiv.appendChild(verdictDisplay)
    choiceDiv.appendChild(computerChoiceDisplay)

}


function randomComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3+1)

    if(randomNumber === 1){
        computerChoice = rockImg
    }
    if(randomNumber === 2){
        computerChoice = scissorImg
    }
    if(randomNumber === 3){
        computerChoice = paperImg
    }
    computerChoiceDisplay.src = computerChoice
    
} 

function getResult() {
    if (computerChoice === userChoice) {
        verdictDisplay.innerHTML= "Ni drog samma"

    }
    if (computerChoice === rockImg && userChoice === paperImg) {
        userPoint++
        verdictDisplay.innerHTML= "Din poäng!"
    }
    if (computerChoice === rockImg && userChoice === scissorImg) {
        computerPoint++ 
        verdictDisplay.innerHTML= "Datorns poäng.."
    }
    if (computerChoice === paperImg && userChoice === scissorImg) {    
        userPoint++
        verdictDisplay.innerHTML= "Din poäng!"

    }
    if (computerChoice === paperImg && userChoice === rockImg) {
        computerPoint++
        verdictDisplay.innerHTML= "Datorns poäng.."

    }
    if (computerChoice === scissorImg && userChoice === rockImg) {
        userPoint++
        verdictDisplay.innerHTML= "Din poäng!"

    }
    if (computerChoice === scissorImg && userChoice === paperImg) {
        computerPoint++
        verdictDisplay.innerHTML= "Datorns poäng.."

    }
    resultDisplay.innerText = userPoint +' - ' + computerPoint

    if (userPoint === 3){
        alert("DU VANN! " + userPoint +' - ' + computerPoint)
        window.location.reload();
    }

    if (computerPoint === 3){
        alert("Du förlorade! " + userPoint +' - ' + computerPoint)
        window.location.reload();
    }
}


