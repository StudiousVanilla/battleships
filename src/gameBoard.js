import Ship from './ships'


export default class GameBoard{
    constructor(){
    this.grid = [
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
]
this.message = 'Select a ship to place on the board'

// to display messages describing game as it plays out
this.gameMessage = ''

this.ships = []

this.shipsSunk = []

this.carrier = new Ship('carrier',5,false,false)
this.battleship = new Ship('battleship',4,false,false)
this.destroyer = new Ship('destroyer',3,false,false)
this.submarine = new Ship('submarine',3,false,false)
this.patrolBoat = new Ship('patrolBoat',2,false,false)

this.ships = [this.carrier,this.battleship, this.destroyer, this.submarine, this.patrolBoat]

// used to trigger end of placement phase in game
this.shipsPlaced = []

this.shotResult = ''

    }

    // this funcrtion is called when the player puts a ship on the board, checkCoordinates() and placeship() handle all the logic involved.
    selectCoordinate(ship, position){
        if(this.checkCoordinates(ship, position)){
            this.removeShip(ship)
            this.placeShip(ship,position)
        }
        else{
            return this.message
        }
    }
    
    // position will be a two digit string number. The first number is the grid row, the second number is the grid column
    placeShip(ship,position){

        // if the ship is horizontal
        if (ship.vertical == false){
            for( let i = 0; i < ship.length; i++){
               this.grid[parseInt(position.charAt(0))][parseInt(position.charAt(1))+i] = ship.name+(i+1)
            } 
        }
        else{
            // if ship is vertical
            for( let i = 0; i < ship.length; i++){
            this.grid[parseInt(position.charAt(0))+i][parseInt(position.charAt(1))] = ship.name+(i+1)
            }
                
        }
        // adds ship to the shipsPlaced array
        this.shipsPlaced.push(ship) 
        this.message = 'Place all your ships and then press ready'
     }

    // position will be a two digit string number. The first number is the grid row, the second number is the grid column
    checkCoordinates(ship,position){
        if(ship.vertical == false){
            // prevents a  ship from extending horizontally off of grid when placed
            if(10 - parseInt(position.charAt(1)) < ship.length){
                this.message = 'Not Enough Space'
                return false
            }
            else{
                // checks each potential position the ship could occupy, based on length, horizontally from the right of the position coordinate
                for(let i = 0; i < ship.length; i++){
                    // if the grid is empty at a given coordinate the next is checked, the process is repeated for the length of the ship
                if(this.grid[parseInt(position.charAt(0))][(parseInt(position.charAt(1)))+i] === ''){
                        continue
                    }
                    else{
                        this.message = 'A ship cannot be placed over another ship'
                        return false
                    }
                }
                return true
            }
        }
        // '10' is the botom of the grid and so a vertical ship cannot begin in the '10' row / (9'x')
        else if(ship.vertical == true){
            if(10 - parseInt(position.charAt(0)) < ship.length){
                this.message = 'Not Enough Space'
                return false
            }
            else{
                // checks each potential position the ship could occupy, based on length, horizontally from the right of the position coordinate
                for(let i = 0; i < ship.length; i++){
                    // if the grid is empty at a given coordinate the next is checked, the process is repeated for the length of the ship
                if(this.grid[(parseInt(position.charAt(0))+i)][parseInt(position.charAt(1))] === ''){
                        continue
                    }
                    else{
                        this.message = 'A ship cannot be placed over another ship'
                        return false
                    }
                }
                return true
            }
        } 
    }

    removeShip(ship){
        // catches each iteration of ship name with ship index (e.g battleship1, battleship2 ect)
        for(let i = 1; i <= ship.length; i++){
            // seaches each row for the string until it is found
            for(let rowNumber = 0; rowNumber <= 9; rowNumber++){
                // checks to see if row contains the string
                if(this.grid[rowNumber].includes(ship.name+i)){
                    // chnages string to a blank ''
                    let indexToChange =  this.grid[rowNumber].indexOf(ship.name+i)
                    this.grid[rowNumber][indexToChange] = ''
                }
                else{
                    // if string is not found in this row, the process moves to the next row
                    continue
                }
            }
        }
        // removes ship from shipsPlaced array
        this.shipsPlaced = this.shipsPlaced.filter(placedShip => placedShip.name != ship.name )
    }

    resolveShot(position){
        // if somehow a coordinate is selected outside the grid
        if(position.charAt(0) > 9 || position.charAt(1) > 9){
            // displayed on player function call
            this.message = 'Not a valid coordinate'
            // o is an invalid shot
            this.shotResult = 0
        }

        // if the coordinate is empty then it is marked as a miss
        else if(this.grid[parseInt(position.charAt(0))][parseInt(position.charAt(1))] == ''){
            this.markMiss(position)
            // eslint-disable-next-line quotes
            this.message = "That's a miss"
            // shot result is 1 for a miss
            this.shotResult =  1
        }

        // if the coordinate was previously selected and was a miss
        else if(this.grid[parseInt(position.charAt(0))][parseInt(position.charAt(1))] == 'miss'){
            this.message = 'Cannot select the same coordinate twice'
            this.shotResult = 0
        }

        // if the coordinate was previously selected and was a hit
        else if((this.grid[parseInt(position.charAt(0))][parseInt(position.charAt(1))]).slice(-3) == 'hit'){
            this.message = 'That coordinate has already been hit'
            this.shotResult = 0
        }

        // if the coordinate is a hit
        else{
            this.markHit(position)
            // eslint-disable-next-line quotes
            this.message = "That's a hit!"
            // shotResult is 2 for a hit
            this.shotResult =  2
        }
    }

    markMiss(position){
        this.grid[parseInt(position.charAt(0))][parseInt(position.charAt(1))] = 'miss'
    }

    markHit(position){
        // *******need to connect with specfic ship to mark hit and sunk and whatnot*******
        // for each ship in ships, if the ship.name = text without number or '-hit' then blah blah

        this.grid[parseInt(position.charAt(0))][parseInt(position.charAt(1))] = this.grid[parseInt(position.charAt(0))][parseInt(position.charAt(1))] + '-hit'


        for (const ship of this.ships ){
            if(
                (this.grid[parseInt(position.charAt(0))][parseInt(position.charAt(1))]).slice(0,-5) == ship.name
                ){
                ship.hit(parseInt((this.grid[parseInt(position.charAt(0))][parseInt(position.charAt(1))]).slice(-5,-4)))
                this.checkSink(ship)
            }
            else{
                continue
            }
        }
    }

    // checks to see if a ship has sunk
    checkSink(ship){
        if(ship.isSunk() == true){
            // adds ships to shipsSunk array
            this.shipsSunk.push(ship)
        }
    }

}

