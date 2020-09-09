Battleships


Made a mistake marking the grids when a turn us taken. 
Initially I thought element changes had to occur within the component they are made. As a result,  the logic for Board2 visual chnages (player 1 turns) are in the 'Board2' vue single file component.

I then realised that it is far simpler to visually mark the grids from the parent vue component 'Battleships'. So, the logic for 'Board1' grid visual changes are in the 'Battleships' vue component.
 
A lot of the logic I wrote for Board2 is bloated and unneccessary but as it works, and this is a learning exercise I decided to leave it. When I look back on the code hopefully it'll be a good trigger to help me remember to plan and test more effectively which will save time and effirt in the long run.

- Built for The Odin Project