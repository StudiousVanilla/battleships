export default class Ship{
    constructor(name,length,vertical,sunk){
        this.name = name
        this.length = length
        this.body = {}
        // creates an object with a key for each 'hit-box' on the ship, depending on its length
        for(let i = 1; i <= this.length; i++){
            this.body[name+i] = 0
        }
        // used for ship placement
        this.vertical = vertical
        this.sunk = sunk
        this.hitCounter = 0
    }
    hit(position){
        // changes value of ship body object for position hit
        this.body[this.name+position] = 1
        this.hitCounter++
        // checks to see if ship has sunk
        this.isSunk()
    }
    isSunk(){
        // uses hit counter to mark if ship has sunk
        if(this.hitCounter === this.length){
            return this.sunk = true
        }
        else{
            return false
        }
    }
}
