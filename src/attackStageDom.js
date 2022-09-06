export function updateBoardDom(player){
    let yShot = player.playerBoard.chronologicalGeneralDamage[player.playerBoard.chronologicalGeneralDamage.length -1].y
    let xShot = player.playerBoard.chronologicalGeneralDamage[player.playerBoard.chronologicalGeneralDamage.length -1].x
    player.playerBoard.board[yShot][xShot].dom.classList.add('shot')

    if (player.playerBoard.board[yShot][xShot].hasShip){
        let yShipHit = player.playerBoard.chronologicalGeneralDamage[player.playerBoard.chronologicalGeneralDamage.length -1].y
        let xShipHit = player.playerBoard.chronologicalGeneralDamage[player.playerBoard.chronologicalGeneralDamage.length -1].x
        player.playerBoard.board[yShipHit][xShipHit].dom.classList.add('shipHit')
    }

    for (let i=0; i<player.playerBoard.allShips.length; i++){
        if (player.playerBoard.allShips[i].isSunk() === true){
            let yLoc = player.playerBoard.allShips[i].placedAt.y 
            let xLoc = player.playerBoard.allShips[i].placedAt.x
            if (!player.playerBoard.board[yLoc][xLoc].dom.classList.contains('shipSunk')){
                if (player.playerBoard.allShips[i].axis === 'vertical'){
                    for (let q=0; q<player.playerBoard.allShips[i].length; q++){
                        player.playerBoard.board[yLoc + q][xLoc].dom.classList.add('shipSunk')
                    }
                } else {
                    for (let q=0; q<player.playerBoard.allShips[i].length; q++){
                        player.playerBoard.board[yLoc][xLoc + q].dom.classList.add('shipSunk')
                    }
                }
            }
        }
    }
    updateShipPreviews(player)
}

// Update the previews next to player name, indicating health life of ships
function updateShipPreviews(player){
    let ships = player.playerBoard.allShips

    if (Array.from(document.querySelectorAll('.playerName'))[0].textContent === player.player.name){
        for(let i=0; i<ships.length; i++){
            let hitsTaken = ships[i].length - ships[i].remainingLength 
            if (ships[i].name === 'Battleship'){
                Array.from(document.querySelector('.battleshipPreview0').children).slice(0, hitsTaken).forEach(elem => {
                    elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                })
            
            }
            if (ships[i].name === 'Carrier'){
                Array.from(document.querySelector('.carrierPreview0').children).slice(0, hitsTaken).forEach(elem => {
                    elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                })
            }
            if (ships[i].name === 'Submarine'){
                if (i === 2){
                    Array.from(Array.from(document.querySelectorAll('.submarinePreview0'))[0].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 3){
                    Array.from(Array.from(document.querySelectorAll('.submarinePreview0'))[1].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
            }
            if (ships[i].name === 'Cruiser'){
                if (i === 4){
                    Array.from(Array.from(document.querySelectorAll('.cruiserPreview0'))[0].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 5){
                    Array.from(Array.from(document.querySelectorAll('.cruiserPreview0'))[1].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 6){
                    Array.from(Array.from(document.querySelectorAll('.cruiserPreview0'))[2].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
            }
            if (ships[i].name === 'Smallship'){
                if (i === 7){
                    Array.from(Array.from(document.querySelectorAll('.smallshipPreview0'))[0].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 8){
                    Array.from(Array.from(document.querySelectorAll('.smallshipPreview0'))[1].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 9){
                    Array.from(Array.from(document.querySelectorAll('.smallshipPreview0'))[2].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
            }
        }    
    }

    if (Array.from(document.querySelectorAll('.playerName'))[1].textContent === player.player.name){
        for(let i=0; i<ships.length; i++){
            let hitsTaken = ships[i].length - ships[i].remainingLength 
            if (ships[i].name === 'Battleship'){
                Array.from(document.querySelector('.battleshipPreview1').children).slice(0, hitsTaken).forEach(elem => {
                    elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                })
            }
            if (ships[i].name === 'Carrier'){
                Array.from(document.querySelector('.carrierPreview1').children).slice(0, hitsTaken).forEach(elem => {
                    elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                })
            }
            if (ships[i].name === 'Submarine'){
                if (i === 2){
                    Array.from(Array.from(document.querySelectorAll('.submarinePreview1'))[0].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 3){
                    Array.from(Array.from(document.querySelectorAll('.submarinePreview1'))[1].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
            }
            if (ships[i].name === 'Cruiser'){
                if (i === 4){
                    Array.from(Array.from(document.querySelectorAll('.cruiserPreview1'))[0].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 5){
                    Array.from(Array.from(document.querySelectorAll('.cruiserPreview1'))[1].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 6){
                    Array.from(Array.from(document.querySelectorAll('.cruiserPreview1'))[2].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
            }
            if (ships[i].name === 'Smallship'){
                if (i === 7){
                    Array.from(Array.from(document.querySelectorAll('.smallshipPreview1'))[0].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 8){
                    Array.from(Array.from(document.querySelectorAll('.smallshipPreview1'))[1].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
                if (i === 9){
                    Array.from(Array.from(document.querySelectorAll('.smallshipPreview1'))[2].children).slice(0, hitsTaken).forEach(elem => {
                        elem.style = 'background-color: rgba(255, 0, 0, 0.671)'
                    })
                }
            }
        }    
    }
}