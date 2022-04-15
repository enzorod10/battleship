export function reportResult(players){
    if (players[0].player.winner === true){
        document.querySelector('.message').textContent = players[0].player.name + 'has won the game!'
    } else {
        document.querySelector('.message').textContent = players[1].player.name + 'has won the game!'
    }
}