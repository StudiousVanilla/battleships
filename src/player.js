import gameBoard from './gameBoard'

export default class Player{
    constructor(){
        this.gameBoard = new gameBoard()
    }

    pickCoordinates(position){
        this.gameBoard.resolveShot(position)
    }
}

