import battleshipGamePicture from './src/assets/battleshipGame.png'

const playAgainstPlayer = document.createEleemnt('div');
document.querySelector('.main').appendChild(playAgainstPlayer)
const playAgainstBot = document.createElement('div');
document.querySelector('.main').appendChild(playAgainstBot)
const battleshipImage = document.createElement('img');
battleshipImage.src = battleshipGamePicture;
document.querySelector('.main').appendChild(battleshipImage)
