import Ship from '../../../src/ships.js'

const carrier = new Ship('carrier',5,false,false)
const battleship = new Ship('battleship',4,false,false)
const destroyer = new Ship('destroyer',3,false,false)
const submarine = new Ship('submarine',3,false,false)
const patrolBoat = new Ship('patrolBoat',2,false,false)

test('make a carrier', ()=>{
    expect([carrier.name, carrier.length, carrier.vertical, carrier.sunk,carrier.body]).toEqual(['carrier',5,false,false,{carrier1:0,carrier2:0,carrier3:0,carrier4:0,carrier5:0}])
})

test('make a battleship', ()=>{
    expect([battleship.name, battleship.length, battleship.vertical, battleship.sunk,battleship.body]).toEqual(['battleship',4,false,false,{battleship1:0,battleship2:0,battleship3:0,battleship4:0}])
})

test('make a destroyer', ()=>{
    expect([destroyer.name, destroyer.length, destroyer.vertical, destroyer.sunk,destroyer.body]).toEqual(['destroyer',3,false,false,{destroyer1:0,destroyer2:0,destroyer3:0}])
})

test('make a submarine', ()=>{
    expect([submarine.name, submarine.length, submarine.vertical, submarine.sunk,submarine.body]).toEqual(['submarine',3,false,false,{submarine1:0,submarine2:0,submarine3:0}])
})

test('make a patrolBoat', ()=>{
    expect([patrolBoat.name, patrolBoat.length, patrolBoat.vertical, patrolBoat.sunk,patrolBoat.body]).toEqual(['patrolBoat',2,false,false,{patrolBoat1:0,patrolBoat2:0}])
})

test('make a hit on the correct part of the body',()=>{
    battleship.hit(3)
    expect(battleship.body).toEqual({battleship1:0,battleship2:0,battleship3:1,battleship4:0})
})