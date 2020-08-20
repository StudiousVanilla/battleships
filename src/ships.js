class Ship{
    constructor(name,length,vertical,sunk){
        this.name = name
        this.length = length
        this.body = {}
        for(let i = 1; i <= this.length; i++){
            this.body[name+i] = 0
        }
        this.vertical = vertical
        this.sunk = sunk
    }
    hit(position){
        this.body[this.name+position] = 1
    }
}

module.exports = Ship