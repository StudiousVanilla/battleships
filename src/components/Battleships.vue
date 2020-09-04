<template>

  <div class = "container">
    <div class = "title-container">
      <p>Player 1</p>
      <p class="title">BattleShips!</p>
      <p>Player 2</p>
    </div>

    <div id="board1-container">


      <Board1
        @changeCoordinate="updatePlacementCoordinate($event)"/>


      <div class = "ship-container">
        <div class = "ship-tile">
          Carrier
          <!-- the player1ship class adds a hover effect during the ship placement phase --> 
          <!-- selectShip changes the ship data property to whichever battleship is chosen -->  
          <div
            id = "carrier" 
            :class="{ player1ship: shipPlacement }"
            class="ship-size"
            @click ="selectShip(player1.gameBoard.carrier)">5</div>
        </div>
        <div class = "ship-tile">
          Battleship
          <div
            id = "battleship" 
            :class="{ player1ship: shipPlacement }"
            class="ship-size"
            @click ="selectShip(player1.gameBoard.battleship)">4</div>
            
        </div>
        <div
          class = "ship-tile">
          Destroyer
          <div
            id = "destroyer"
            :class="{ player1ship: shipPlacement }"
            class="ship-size"
            @click ="selectShip(player1.gameBoard.destroyer)">3</div>
        </div>
        <div class = "ship-tile">
          Submarine
          <div
            id = "submarine" 
            :class="{ player1ship: shipPlacement }"
            class="ship-size"
            @click ="selectShip(player1.gameBoard.submarine)">3</div>
        </div>
        <div class = "ship-tile">
          Patrol Boat
          <div
            id = "patrolBoat" 
            :class="{ player1ship: shipPlacement }"
            class="ship-size"
            @click ="selectShip(player1.gameBoard.patrolBoat)">2</div>
        </div> 
      </div>
    </div>

    <div id = "divider"/>

    <div id="board2-container">
      <Board2/>
      <div class = "ship-container">
        <div class = "ship-tile">
          Carrier
          <div
            id = "carrier2" 
            class="ship-size">5</div>
        </div>
        <div class = "ship-tile">
          Battleship
          <div
            id = "battleship2"
            class="ship-size">4</div>
        </div>
        <div class = "ship-tile">
          Destroyer
          <div 
            id = "destroyer2"
            class="ship-size">3</div>
        </div>
        <div class = "ship-tile">
          Submarine
          <div 
            id = "submarine2"
            class="ship-size">3</div>
        </div>
        <div class = "ship-tile">
          Patrol Boat
          <div
            id = "patrolBoat2"
            class="ship-size">2</div>
        </div> 
      </div>
    </div>

    <div 
   
      class="message">
      {{ msg }}
    </div>
    <button 
      @click="placeShip(ship,'10')">Ready</button>
  </div>
  
  
</template>

<script>
import Board1 from './Board1'
import Board2 from './Board2'

import Player from '../player.js'

let player1 = new Player()

export default {
  name: 'Battleships',
  components: {Board1, Board2},
  data () {
    return {
      // enables player1 variables to live change
      player1: new Player(),
      msg: 'Select a ship to place on the board',
      // sets the active ship for ship placement
      ship: '',
      // toggles certain functions based on phase of play
      shipPlacement: true,
      // coordinate used for placing a ship (player1.gameboard)
      placementCoordinate: '',
      // coordinate used for attacking opponent (player2.gameboard)
      attackCoordinate:''
    }
  },
  methods:{
    selectShip(ship){
      // only fires if the game is in ship placement phase
      if(this.shipPlacement){
        this.ship =ship
        this.msg = 'Select a sqaure to place you ship'
      } 
    },

    placeShip(ship,position){
      player1.gameBoard.selectCoordinate(ship,position)
      // eslint-disable-next-line
      console.log(player1.gameBoard.grid);
      this.msg = player1.gameBoard.message
    },

    updatePlacementCoordinate(coordinate){
      this.placementCoordinate = coordinate
      // eslint-disable-next-line
      console.log(this.placementCoordinate);
    }


  }
}


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
    background-color: red;
    padding: 1px 0px 1px 2px;
    max-width: 430px;
    min-width: 430px;
    max-height: 430px;
    min-height: 430px;
  }

  #divider{
    width: 1px;
    height: 60vh;
    border-left: 1px dashed black;
  }

  #board2-container{
    width: 40vw;
    height: 70vh;
    background-color: blue;
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
    margin: 30px 0px 0px 0px;

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
    background-color: yellow;
  }

  .message{
    margin-top: 120px;
    width:100%;
    text-align: center;
    min-width: 800px;
    min-height: 40px;
  }


</style>
