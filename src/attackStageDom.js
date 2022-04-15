import { populateBotBoard } from "./placeBotShips"

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
                        console.log('test')
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
}