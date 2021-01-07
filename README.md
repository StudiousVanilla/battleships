This web app is an imitation of the board game 'Battleships'

It was built to demonstrate proficency in the **JS framework Vue**.

This web app also displays a competency in **Vanilla JS** and **Jest testing**.

This web app uses **babel** and **webpack** to build.

This web app has not been optimised for mobile devices.

Link to live demo - https://studiousvanilla.github.io/battleships/

[![Screenshot-2021-01-07-at-13-02-10.png](https://i.postimg.cc/d0KB98GD/Screenshot-2021-01-07-at-13-02-10.png)](https://postimg.cc/hXpTDQyq)

Made by Oisín Byrne - 2020 - https://studiousvanilla.github.io/portfolio/

************

Project Notes:

Made a mistake marking the grids when a turn is taken. 
Initially I thought that element changes had to occur within the component they are made. As a result, the logic for Board2 visual changes (player 1 turns) are in the 'Board2' vue single file component.

I then realised that it is far simpler to visually mark the grids from the parent vue component 'Battleships'. So, the logic for 'Board1' grid visual changes are in the 'Battleships' vue component.
 
A lot of the logic I wrote for Board2 is bloated and unneccessary but as it works, and this is a learning exercise I decided to leave it. When I look back on the code hopefully it'll be a good trigger to help me remember to plan and test more effectively which will save time and effirt in the long run.

Potential improvements:

- Make Player 2 (computer) turns smart and not just random
- Add sound effects and/or ship design to game
- Create a mobilr version with a 'swap' screen so that players do not see eachothers boards
