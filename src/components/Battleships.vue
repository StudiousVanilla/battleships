/* eslint-disable vue/attributes-order */
/* eslint-disable vue/attribute-hyphenation */

<template>

  <div class = "container">

    <div 
      v-show="gameOver"
      class="winner">
      <div class="winner-message">
        <p>{{ msg }}</p> 
        <button 
          class="again-button" 
          @click="playAgain()">Play Again</button>
      </div>
      
    </div>

    <div class = "title-container">
      <p>Player 1</p>
      <p class="title">BattleShips!</p>
      <p>Player 2</p>
    </div>

    <div id="board1-container">

      <Board1
        :ship="ship"
        :msg="msg"
        :shipplacement="shipPlacement"
        :computedshot="Board1computedshot"
        @changeCoordinate="updatePlacementCoordinate($event)"/>


      <div class = "ship-container">
        <div class = "ship-tile carrier-tile">
          Carrier
          <!-- the player1ship class adds a hover effect during the ship placement phase --> 
          <!-- tileToHighlight highlights the chosen ship during the placement phase-->
          <!-- selectShip changes the ship data property to whichever battleship is chosen -->  
          <div
            id = "carrier" 
            :class="{ player1ship: shipPlacement, highlight: tileToHighlight == 'carrier' }"
            class="ship-size"
            @click ="selectShip(player1.gameBoard.carrier), changeTileToHighlight('carrier')">5</div>
        </div>
        <div class = "ship-tile battleship-tile">
          Battleship
          <div
            id = "battleship" 
            :class="{ player1ship: shipPlacement, highlight: tileToHighlight == 'battleship' }"
            class="ship-size"
            @click ="selectShip(player1.gameBoard.battleship), changeTileToHighlight('battleship')">4</div>
            
        </div>
        <div
          class = "ship-tile destroyer-tile">
          Destroyer
          <div
            id = "destroyer"
            :class="{ player1ship: shipPlacement, highlight: tileToHighlight == 'destroyer' }"
            class="ship-size"
            @click ="selectShip(player1.gameBoard.destroyer),changeTileToHighlight('destroyer')">3</div>
        </div>
        <div class = "ship-tile submarine-tile">
          Submarine
          <div
            id = "submarine" 
            :class="{ player1ship: shipPlacement, highlight: tileToHighlight == 'submarine' }"
            class="ship-size"
            @click ="selectShip(player1.gameBoard.submarine),changeTileToHighlight('submarine')">3</div>
        </div>
        <div class = "ship-tile patrol-tile">
          Patrol Boat
          <div
            id = "patrolBoat" 
            :class="{ player1ship: shipPlacement, highlight: tileToHighlight == 'patrolBoat' }"
            class="ship-size"
            @click ="selectShip(player1.gameBoard.patrolBoat),changeTileToHighlight('patrolBoat')">2</div>
        </div>

      </div>
      <div class="button-container"> 
        <button 
          v-show="shipPlacement"
          class="rotationButton" 
          @click="changeRotation()">Rotate ship</button>

        <span 
          v-show="shipPlacement"
          id="arrow"
          class="arrow">        
          <font-awesome-icon
            v-show="ship.vertical"
            :icon="['fas', 'long-arrow-alt-down']"
            class="icon"
          />

          <font-awesome-icon
            v-show="!ship.vertical"
            :icon="['fas', 'long-arrow-alt-right']"
            class="icon"
          />
        </span>      
      </div> 
    </div>

    <div id = "divider"/>

    <div id="board2-container">

      <Board2
        :shipplacement="shipPlacement"
        :computedshot="Board2computedshot"
        @changeCoordinate="updateAttackCoordinate($event)"
        @resetPlayer1ShotResult="resetPlayer1ShotResult($event)"/>

      <div class = "ship-container">
        <div class = "ship-tile carrier-tile">
          Carrier
          <div
            id = "carrier2" 
            class="ship-size">5</div>
        </div>
        <div class = "ship-tile battleship-tile">
          Battleship
          <div
            id = "battleship2"
            class="ship-size">4</div>
        </div>
        <div class = "ship-tile destroyer-tile">
          Destroyer
          <div 
            id = "destroyer2"
            class="ship-size">3</div>
        </div>
        <div class = "ship-tile submarine-tile">
          Submarine
          <div 
            id = "submarine2"
            class="ship-size">3</div>
        </div>
        <div class = "ship-tile patrol-tile">
          Patrol Boat
          <div
            id = "patrolBoat2"
            class="ship-size">2</div>
        </div> 
      </div>
    </div>

    <div class="message">{{ msg }}</div>
    <button
      v-show="shipPlacement"
      @click="startGame()">
      Ready</button>
  </div>
  
  
</template>

<script>
import Board1 from './Board1'
import Board2 from './Board2'

import Player from '../player.js'

let player1 = new Player()
let player2 = new Player()

export default {
  name: 'Battleships',
  components: {Board1, Board2},
  data () {
    return {
      // enables player1 variables to live change
      player1: new Player(),
      // enables player2 variables to live change
      player2: new Player(),
      // msg changes based on player1 and player2 gameboards
      msg: 'Select a ship to place on the board',
      // sets the active ship for ship placement
      ship: '',
      // toggles certain functions based on phase of play
      shipPlacement: true,
      // coordinate used for placing a ship (player1.gameboard)
      placementCoordinate: '',
      // marks ship tile to highlight during placement phase
      tileToHighlight: '',

      // records result of player1 shot
      player1ShotResult:'',
      // coordinate used for attacking opponent (player2.gameboard)
      attackCoordinate:'',
      // tracks how many of player1's ships have been sunk
      player1ShipsSunk: [],
      // holds random coordinate value used during computer turn
      randomCoordinate: '',
      //records the result of player2's shot result
      player2ShotResult: '',
      // tracks how many of player2's ships have been sunk
      player2ShipsSunk: [],

      // triggers winner overlay
      gameOver: false
    }
  },

  computed:{
    Board2computedshot(){
      return this.player1ShotResult
    },
    Board1computedshot(){
      return this.player2ShotResult
    },
  },

  methods:{
    selectShip(ship){
      // only fires if the game is in ship placement phase
      if(this.shipPlacement){
        this.ship =ship
        this.msg = 'Select a sqaure to place you ship'
      } 
    },
    
    // places a ship at the chosen coordinates if they are eligible
    placeShip(ship,position){
      if(this.shipPlacement){
      player1.gameBoard.selectCoordinate(ship,position)
      this.msg = player1.gameBoard.message
      }
    },

    // updates ship placement coordinate recieved from Board1
    updatePlacementCoordinate(coordinate){
      this.placementCoordinate = coordinate
      this.placeShip(this.ship,this.placementCoordinate)
    },

    // updates the 'vertical' property for selected ship
    changeRotation(){
      if(this.ship != ''){
        this.ship.vertical = !this.ship.vertical
      }
      else{
        this.msg = 'Select a ship above to rotate it'
      }
    },

    // highlights active ship tile during placement phase
    changeTileToHighlight(tileName){
      if(this.shipPlacement){
        this.tileToHighlight = tileName
        document.getElementById('arrow').style.color = 'var(--'+this.ship.name+'-color)'
      }
      else{
        this.tileToHighlight = ''
      }
        
      },

    // places a ship on player2's gameboard
    player2PlaceShip(ship,coordinate){
        player2.gameBoard.selectCoordinate(ship, coordinate)
    },

    // ends the ship placement phase once all ships have been placed
    startGame(){
      if(player1.gameBoard.shipsPlaced.length == 5){
        // ends placement phase
        this.shipPlacement = !this.shipPlacement

        //resets so that no ship tiles are highlighted
        this.tileToHighlight = ''
        
        // places player2 ships
        this.player2PlaceShip(player2.gameBoard.carrier, '33')
        player2.gameBoard.battleship.vertical = true
        this.player2PlaceShip(player2.gameBoard.battleship, '09')
        this.player2PlaceShip(player2.gameBoard.destroyer, '72')
        this.player2PlaceShip(player2.gameBoard.submarine, '97')
        player2.gameBoard.patrolBoat.vertical = true
        this.player2PlaceShip(player2.gameBoard.patrolBoat, '58')

        //eslint-disable-next-line
        console.log(player2.gameBoard.grid);
        // informs player 1 to take a turn
        this.msg = 'Player:1 Turn'
        // then start game
      }
      // informs player to place all ships before starting the game
      else{
        this.msg = 'Place all your ships before starting the game!'
      }
    },

    // updates attack coordinate recieved from Board2
    updateAttackCoordinate(coordinate){
      if(this.shipPlacement == true){
        return
      }
      else{
        // sets attack coordinate recieved from Board2
        this.attackCoordinate = coordinate
        // player1's move is resolved using the new attack coordinates
        this.player1ResolveShot(this.attackCoordinate)

        this.gameLoop()
      } 
    },

    // player1's shot affects player2's gameboard
    player1ResolveShot(coordinate){
      player2.gameBoard.resolveShot(coordinate)
      this.msg = player2.gameBoard.message
      this.player1ShotResult = player2.gameBoard.shotResult
    },

    // resetes player1ShotResult so that prop cahnges trigger correctly
    resetPlayer1ShotResult(value){
      this.player1ShotResult = value
    },

    // triggers once player 1 makes their first move, and after each subsequent move
    gameLoop(){
      // check if computedShot was 0
      if(player2.gameBoard.shotResult == 0){
        return
      }
      // if the shot was valid then the loop finishes
      else{
        // player1 victory condition
      this.checkPlayer1Victory()

      // player2 move with random shot
      this.player2ResolveShot(this.makeRandomCoordinate())

      // player2 victory condition
      this.checkPlayer2Victory()
      }
    },

    // checks player1 victory condition
    checkPlayer1Victory(){
      if(player2.gameBoard.shipsSunk.length == 5){
        this.msg = 'You win!'
        this.gameOver = true
        return
      }
      // cycles through each ship that is added to the shipsSunk array
      else if(player2.gameBoard.shipsSunk.length > 0){
        for(let ship of player2.gameBoard.shipsSunk){
          // changes the apperance of the ship tile for Board2 to show that a ship has been sunk
          let square = document.getElementById(ship.name+'2')
          square.style.color = 'red'
          square.innerText = 'X'
          square.style.borderColor = 'red'
          square.style.fontSize = '18px'
        }
      }
      else{
        return
      }
    },
    
    // player2's shot affects player1's gameboard
    player2ResolveShot(coordinate){
      // the shot is resolved
      player1.gameBoard.resolveShot(coordinate)
      // if the shot was invalid another shot is taken until the shot is valid
      while(player1.gameBoard.shotResult == 0){
        this.player2ResolveShot(this.makeRandomCoordinate())
      }
      // once a valid shot has been made the shot result is recorded
      this.player2ShotResult = player1.gameBoard.shotResult
      // tile is marked appropriately
      this.markBoard1Tile(coordinate)
    },

    // generate two random numbers from 0-9 and concatenat them into a string coordinate
    makeRandomCoordinate(){
      
      this.randomCoordinate = 
      (Math.floor(Math.random() * 10)) 
      + '' + 
      (Math.floor(Math.random() * 10))

      return this.randomCoordinate
    },

    // marks Board1 grid depending on player2ShotResult
    markBoard1Tile(coordinate){
      let square = document.getElementById(coordinate)
      if(square.classList.contains('marked')){
        return
      }
      else{
        if(this.player2ShotResult == 1){
        square.classList.add('marked')
        square.style.backgroundColor = 'rgb(179 179 159)'
        square.style.color = 'red'
      }
      else if(this.player2ShotResult == 2){
        square.classList.add('marked')
        square.style.borderColor = 'red'
        square.style.color = 'red'
        square.style.fontSize = '35px'
        square.innerText = 'X' 
      }
      }
    },

    // checks player2 victory condition
    checkPlayer2Victory(){
      if(player1.gameBoard.shipsSunk.length == 5){
        this.msg = 'Computer wins!'
        this.gameOver = true
        return
      }
      // cycles through each ship that is added to the shipsSunk array
      else if(player1.gameBoard.shipsSunk.length > 0){
        for(let ship of player1.gameBoard.shipsSunk){
          // changes the apperance of the ship tile for Board1 to show that a ship has been sunk
          let square = document.getElementById(ship.name)
          square.style.color = 'red'
          square.innerText = 'X'
          square.style.borderColor = 'red'
          square.style.fontSize = '18px'
        }
      }
      else{
        return
      }
    },

    // refeshes page
    playAgain(){
      window.location.reload()
    },
  },
}


// add random ship placement
// add smart computer play


</script>


<style scoped>
  .container{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    min-width: 900px;
    min-height: 600px;
    font-family: monospace;
    --carrier-color: purple;
    --battleship-color: rgb(14, 211, 14);
    --destroyer-color: rgb(158, 185, 0);
    --submarine-color: rgb(13, 231, 231);
    --patrolBoat-color: rgb(245, 160, 3);
  }

  .winner{
    width: 90%;
    height: 90%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    background-color: transparent;
    opacity: 0.95;
  }

  .winner-message{
    width: 70%;
    height: 60%;
    background-color: rgb(54, 48, 49);
    color: white;
    border: 5px dashed black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px 0px 10% 0px;
    min-width: 850px;
  }

  .again-button{
    font-size: 35px;
    color:black;
  }

  .title-container{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 20px;
  }

  .title{
    width: 48%;
    text-decoration: underline solid black;
  }

  #board1-container{
    width: 40vw;
    height: 70vh;
    background-color: gray;
    padding: 1px 0px 1px 2px;
    max-width: 430px;
    min-width: 430px;
    max-height: 430px;
    min-height: 430px;
  }

  #divider{
    width: 1px;
    height: 67vh;
    border-left: 1px dashed black;
    max-height: 450px;
    min-height: 430px;

  }

  #board2-container{
    width: 40vw;
    height: 70vh;
    background-color: gray;
    padding: 1px 0px 1px 2px;
    max-width: 430px;
    min-width: 430px;
    max-height: 430px;
    min-height: 430px;
  }

  .ship-container{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0px 0px 0px;
    font-size: 13px;
  }

  .ship-tile{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ship-size{
    text-align: center;
    border: 1px solid black;
    height: 43px;
    width: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0px 0px 0px;
  }

  .player1ship:hover{
    transform: scale(1.1);
  }

  .carrier-tile, #carrier, #carrier2{
    color: purple;
    border-color: purple;
  }

  .battleship-tile, #battleship, #battleship2{
  color: rgb(14, 211, 14);
  border-color: rgb(14, 211, 14);
}

  .destroyer-tile, #destroyer, #destroyer2{
  color: rgb(158, 185, 0);
  border-color: rgb(158, 185, 0);
}

  .submarine-tile, #submarine, #submarine2{
  color: rgb(13, 231, 231);
  border-color: rgb(13, 231, 231);
}

  .patrol-tile, #patrolBoat, #patrolBoat2{
  color: rgb(245, 160, 3);
  border-color: rgb(245, 160, 3);
}

  .message{
    margin-top: 110px;
    width:100%;
    text-align: center;
    min-width: 800px;
    min-height: 40px;
    font-size: 20px;
  }

  .button-container{
    display: flex;
    justify-content:flex-start;
    margin: 20px 0px 0px 15px;
    width: 100%;
    z-index: 2;
  }

  .rotation-button{
    margin: 10px;
    position: relative;
    z-index: 2;
  }

  .arrow{
    margin: 0px 0px 0px 10px;
  }

  .icon{
    font-size: 20px;
  }
  

  button{
    font-family: monospace;
  }

  .highlight{
    transform: scale(1.1);
    border-width: 2px;
  }


</style>
