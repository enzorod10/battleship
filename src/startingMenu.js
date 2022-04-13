import './style.css';
import battleshipGameTitle from './assets/battleshipLogo.png'
import battleshipPNG from './assets/battleshipImage.png'
import { setupPlayer1 } from './setupGame.js'

let errors = [];

const startingMenu = document.createElement('div');
startingMenu.classList.add('startingMenu');
document.body.appendChild(startingMenu)

const battleshipLogo = document.createElement('img');
battleshipLogo.classList.add('battleshipLogo')
battleshipLogo.src = battleshipGameTitle;
startingMenu.appendChild(battleshipLogo)

const battleshipImage = document.createElement('img');
battleshipImage.classList.add('battleshipImage')
battleshipImage.src = battleshipPNG;
startingMenu.appendChild(battleshipImage)

const optionsContainer = document.createElement('div');
optionsContainer.classList.add('optionsContainer')
startingMenu.appendChild(optionsContainer);

const playAgainstBot = document.createElement('div');
playAgainstBot.classList.add('playAgainstBot')
playAgainstBot.textContent = 'SINGLE PLAYER'
optionsContainer.appendChild(playAgainstBot)

const playAgainstPlayer = document.createElement('div');
playAgainstPlayer.classList.add('playAgainstPlayer')
playAgainstPlayer.textContent = 'MULTI PLAYER'
optionsContainer.appendChild(playAgainstPlayer)

// play vs bot
playAgainstBot.addEventListener('click', selectDifficulty)

function selectDifficulty(){
    playAgainstBot.removeEventListener('click', selectDifficulty)
    optionsContainer.textContent = '';
    const easyDifficulty = document.createElement('div');
    easyDifficulty.classList.add('easyDifficulty')
    easyDifficulty.textContent = 'NOVICE';
    optionsContainer.appendChild(easyDifficulty);

    const hardDifficulty = document.createElement('div');
    hardDifficulty.classList.add('hardDifficulty')
    hardDifficulty.textContent = 'EXPERT';
    optionsContainer.appendChild(hardDifficulty)
    let setUpGameTemp;
    easyDifficulty.addEventListener('click', setUpGameTemp = () =>{
        easyDifficulty.removeEventListener('click', setUpGameTemp)
        document.querySelector('body').textContent = '';
        setupPlayer1('singlePlayer', 'novice')
    })

    hardDifficulty.addEventListener('click', setUpGameTemp = () =>{
        hardDifficulty.removeEventListener('click', setUpGameTemp)
        document.querySelector('body').textContent = '';
        setupPlayer1('singlePlayer', 'expert')
    })
}

// play vs player
playAgainstPlayer.addEventListener('click', promptPlayerNames)

function promptPlayerNames(){
    playAgainstPlayer.removeEventListener('click', promptPlayerNames)
    optionsContainer.textContent= '';

    const player1NameContainer = document.createElement('div');
    player1NameContainer.classList.add('player1NameContainer');
    optionsContainer.appendChild(player1NameContainer)

    const player2NameContainer = document.createElement('div');
    player2NameContainer.classList.add('player2NameContainer');
    optionsContainer.appendChild(player2NameContainer)
    
    const player1Label = document.createElement('div');
    player1Label.textContent = 'Player 1 Name';
    player1NameContainer.appendChild(player1Label)

    const inputPlayer1Name = document.createElement('input');
    inputPlayer1Name.classList.add('inputPlayer1Name')
    player1NameContainer.appendChild(inputPlayer1Name)

    const player2Label = document.createElement('div');
    player2Label.textContent = 'Player 2 Name';
    player2NameContainer.appendChild(player2Label)

    const inputPlayer2Name = document.createElement('input');
    inputPlayer2Name.classList.add('inputPlayer2Name')
    player2NameContainer.appendChild(inputPlayer2Name)

    const playMultiplayerButton = document.createElement('div');
    playMultiplayerButton.classList.add('playMultiplayerButton');
    playMultiplayerButton.textContent = 'PLAY';
    startingMenu.appendChild(playMultiplayerButton)

    playMultiplayerButton.addEventListener('click', playMultiplayer)
}

function playMultiplayer(){
    errors = [];
        let allErrors = document.querySelectorAll('.errorMessage')
        for (let i=0; i<allErrors.length; i++){
            allErrors[i].remove();
        }

        if (document.querySelector('.inputPlayer1Name').value === ''){
            errors.push(document.createElement('div'))
            errors[errors.length - 1].classList.add('errorMessage')
            errors[errors.length - 1].textContent = 'Player 1 name can\'t be left empty';
            document.querySelector('.player1NameContainer').appendChild(errors[errors.length - 1])
        }
        if (document.querySelector('.inputPlayer2Name').value === ''){
            errors.push(document.createElement('div'))
            errors[errors.length - 1].classList.add('errorMessage')
            errors[errors.length - 1].textContent = 'Player 2 name can\'t be left empty';
            document.querySelector('.player2NameContainer').appendChild(errors[errors.length - 1])
        } else {
            document.querySelector('.playMultiplayerButton').removeEventListener('click', playMultiplayer)

        }
}