import GameBoard from '../../../src/gameBoard.js'
import Player from '../../../src/player.js'

let gameBoard = new GameBoard

let player1 = new Player
let player2 = new Player

test('make each ship', ()=>{
    expect([gameBoard.carrier.name, gameBoard.carrier.length, gameBoard.carrier.vertical, gameBoard.carrier.sunk,gameBoard.carrier.body]).toEqual(['carrier',5,false,false,{carrier1:0,carrier2:0,carrier3:0,carrier4:0,carrier5:0}])
    expect([gameBoard.battleship.name, gameBoard.battleship.length, gameBoard.battleship.vertical, gameBoard.battleship.sunk,gameBoard.battleship.body]).toEqual(['battleship',4,false,false,{battleship1:0,battleship2:0,battleship3:0,battleship4:0}])
    expect([gameBoard.destroyer.name, gameBoard.destroyer.length, gameBoard.destroyer.vertical, gameBoard.destroyer.sunk,gameBoard.destroyer.body]).toEqual(['destroyer',3,false,false,{destroyer1:0,destroyer2:0,destroyer3:0}])
    expect([gameBoard.submarine.name, gameBoard.submarine.length, gameBoard.submarine.vertical, gameBoard.submarine.sunk,gameBoard.submarine.body]).toEqual(['submarine',3,false,false,{submarine1:0,submarine2:0,submarine3:0}])
    expect([gameBoard.patrolBoat.name, gameBoard.patrolBoat.length, gameBoard.patrolBoat.vertical, gameBoard.patrolBoat.sunk,gameBoard.patrolBoat.body]).toEqual(['patrolBoat',2,false,false,{patrolBoat1:0,patrolBoat2:0}])
})

test('make a hit on the correct part of the body',()=>{
    gameBoard.battleship.hit(3)
    expect(gameBoard.battleship.body).toEqual({battleship1:0,battleship2:0,battleship3:1,battleship4:0})
})

test('if hitCounter changes after a ship has been hit', ()=>{
    expect(gameBoard.battleship.hitCounter).toBe(1)
})

// test('see if a ship (battleship in this test) is sunk when created'), ()=>{
//     expect(gameBoard.battleship.sunk).toBe(false)
// }

test('test to see if hitCounter activates the isSunk change for battleship and patrolBoat', ()=>{
    gameBoard.battleship.hit(1)
    gameBoard.battleship.hit(2)
    gameBoard.battleship.hit(4)
    expect(gameBoard.battleship.isSunk()).toBe(true)
    gameBoard.patrolBoat.hit(1)
    gameBoard.patrolBoat.hit(2)
    expect(gameBoard.patrolBoat.isSunk()).toBe(true)
})

test('Coordinates are checked when placing the first boat', ()=>{
    expect(gameBoard.checkCoordinates(gameBoard.battleship, '06')).toBe(true)
    expect(gameBoard.checkCoordinates(gameBoard.battleship, '57')).toBe(false)
    expect(gameBoard.checkCoordinates(gameBoard.patrolBoat, '09')).toBe(false)
    expect(gameBoard.checkCoordinates(gameBoard.patrolBoat, '98')).toBe(true)
    expect(gameBoard.checkCoordinates(gameBoard.carrier, '45')).toBe(true)
    expect(gameBoard.checkCoordinates(gameBoard.carrier, '46')).toBe(false)

    gameBoard.battleship.vertical = true
    gameBoard.patrolBoat.vertical = true
    gameBoard.carrier.vertical = true
    expect(gameBoard.checkCoordinates(gameBoard.battleship, '60')).toBe(true)
    expect(gameBoard.checkCoordinates(gameBoard.battleship, '75')).toBe(false)
    expect(gameBoard.checkCoordinates(gameBoard.patrolBoat, '90')).toBe(false)
    expect(gameBoard.checkCoordinates(gameBoard.patrolBoat, '89')).toBe(true)
    expect(gameBoard.checkCoordinates(gameBoard.carrier, '64')).toBe(false)
    expect(gameBoard.checkCoordinates(gameBoard.carrier, '54')).toBe(true)

})

test('if ship is placed on gameBoard correctly',()=>{
    gameBoard.battleship.vertical = false
    gameBoard.patrolBoat.vertical = false
    gameBoard.carrier.vertical = false
    gameBoard.placeShip(gameBoard.battleship,'00')
    expect(gameBoard.grid).toEqual([
        ['battleship1','battleship2','battleship3','battleship4','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
    ])

    gameBoard.patrolBoat.vertical = true
    gameBoard.placeShip(gameBoard.patrolBoat,'33')
    expect(gameBoard.grid).toEqual([
        ['battleship1','battleship2','battleship3','battleship4','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','patrolBoat1','','','','','',''],
        ['','','','patrolBoat2','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
    ])

    gameBoard.placeShip(gameBoard.submarine,'04')
    expect(gameBoard.grid).toEqual([
        ['battleship1','battleship2','battleship3','battleship4','submarine1','submarine2','submarine3','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','patrolBoat1','','','','','',''],
        ['','','','patrolBoat2','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
    ])
})

test('if ships array correctly holds ships when placed on board', ()=>{
    expect(gameBoard.ships).toEqual([
    {"body": {"carrier1": 0, "carrier2": 0, "carrier3": 0, "carrier4": 0, "carrier5": 0}, "hitCounter": 0, "length": 5, "name": "carrier", "sunk": false, "vertical": false},

    {"body": {"battleship1": 1, "battleship2": 1, "battleship3": 1, "battleship4": 1}, "hitCounter": 4, "length": 4, "name": "battleship", "sunk": true, "vertical": false},

    {"body": {"destroyer1": 0, "destroyer2": 0, "destroyer3": 0}, "hitCounter": 0, "length": 3, "name": "destroyer", "sunk": false, "vertical": false},
    
    {"body": {"submarine1": 0, "submarine2": 0, "submarine3": 0}, "hitCounter": 0, "length": 3, "name": "submarine", "sunk": false, "vertical": false},
    
    {"body": {"patrolBoat1": 1, "patrolBoat2": 1}, "hitCounter": 2, "length": 2, "name": "patrolBoat", "sunk": true, "vertical": true}])
})

test('if a ship is removed from the gameBoard correctly', ()=>{
    gameBoard.removeShip(gameBoard.battleship)
    expect(gameBoard.grid).toEqual([
        ['','','','','submarine1','submarine2','submarine3','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','patrolBoat1','','','','','',''],
        ['','','','patrolBoat2','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
    ])

    gameBoard.removeShip(gameBoard.patrolBoat)
    expect(gameBoard.grid).toEqual([
        ['','','','','submarine1','submarine2','submarine3','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
    ])

    gameBoard.removeShip(gameBoard.submarine)
    expect(gameBoard.grid).toEqual([
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
    ])
})

test('test if coordinates selected, checked and ship placed correctly', () => {
    gameBoard.selectCoordinate(gameBoard.battleship, '00')
    expect(gameBoard.grid).toEqual([
        ['battleship1','battleship2','battleship3','battleship4','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
    ])
    expect(gameBoard.selectCoordinate(gameBoard.submarine, '01')).toEqual('A ship cannot be placed over another ship')
    expect(gameBoard.selectCoordinate(gameBoard.submarine,'08')).toEqual('Not Enough Space')
    gameBoard.selectCoordinate(gameBoard.submarine, '04')
    expect(gameBoard.grid).toEqual([
        ['battleship1','battleship2','battleship3','battleship4','submarine1','submarine2','submarine3','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
    ])
    
})

test('resolve a shot that misses, a shot that hits, and a shot that tries to hit the same coordinate again', () =>{
    gameBoard.submarine.hitCounter = 0
    gameBoard.resolveShot('10')
    expect(gameBoard.grid).toEqual([
        ['battleship1','battleship2','battleship3','battleship4','submarine1','submarine2','submarine3','','',''],
        ['miss','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
    ])
    gameBoard.resolveShot('04')
    expect(gameBoard.grid).toEqual([
        ['battleship1','battleship2','battleship3','battleship4','submarine1-hit','submarine2','submarine3','','',''],
        ['miss','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
    ]) 
    gameBoard.resolveShot('10')
    expect(gameBoard.message).toEqual('Cannot select the same coordinate twice')
    gameBoard.resolveShot('04')
    expect(gameBoard.message).toEqual('That coordinate has already been hit') 

})

test('check if a hit has been recorded correctly on a ships body and on the ships hit counter', ()=>{
    expect(gameBoard.submarine.body).toEqual({'submarine1':1,'submarine2':0,'submarine3':0})
    expect(gameBoard.submarine.hitCounter).toEqual(1)
})

test('check if submarine is marked as all hit, is sunk and is added to shipsSunk', ()=>{
    gameBoard.resolveShot('05')
    gameBoard.resolveShot('06')
    expect(gameBoard.submarine.body).toEqual({'submarine1':1,'submarine2':1,'submarine3':1})

    expect(gameBoard.submarine.isSunk).toBeTruthy()

    expect(gameBoard.shipsSunk).toEqual([{"body": {"submarine1": 1, "submarine2": 1, "submarine3": 1}, "hitCounter": 3, "length": 3, "name": "submarine", "sunk": true, "vertical": false}])
})

test('if player 1 and player 2 gameboards render correctly', ()=>{

    player1.gameBoard.placeShip(player1.gameBoard.carrier,'00')
    player1.gameBoard.placeShip(player1.gameBoard.submarine,'10')
    player1.gameBoard.patrolBoat.vertical = true
    player1.gameBoard.placeShip(player1.gameBoard.patrolBoat,'89')

    expect(player1.gameBoard.grid).toEqual([
        ['carrier1','carrier2','carrier3','carrier4','carrier5','','','','',''],
        ['submarine1','submarine2','submarine3','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','','patrolBoat1'],
        ['','','','','','','','','','patrolBoat2'],
    ])

    player2.gameBoard.placeShip(player2.gameBoard.carrier,'00')
    player2.gameBoard.removeShip(player2.gameBoard.carrier)
    player2.gameBoard.destroyer.vertical = true
    player2.gameBoard.placeShip(player2.gameBoard.destroyer,'33')

    expect(player2.gameBoard.grid).toEqual([
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','destroyer1','','','','','',''],
        ['','','','destroyer2','','','','','',''],
        ['','','','destroyer3','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
    ])
})

