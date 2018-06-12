# Exercise 2
1. Define a `hands` array with the values 'rock', 'paper', and 'scissors';
2. Define a function called `getHand()` that returns a hand from the array using `parseInt(Math.random()*10)%3`
3. Define two objects for two players. Each player has `name` and `getHand()` properties.
4. Define a function called `playRound()` that
- Takes two player objects as arguments
- Gets hands from each
- Determines the winner
- Logs the hands played and name of the winner.
- If its a tie, log the hands played and "it's a tie".
- Returns the winner object (null if no winner)
5. Define a function called `playGame()` that takes arguments `player1`, `player2`, and `playUntil`.
- Play rounds until one of the players wins `playUntil` hands
- When one player has won enough games, return the winning player object
6. Play a game to 5 wins