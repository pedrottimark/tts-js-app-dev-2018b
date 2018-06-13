const player1 = "Chris";
const player2 = "Jimmy";
let player1Score = 0;
let player2Score = 0;
const weapons = ["rock", "paper", "scissors"];

const winConditions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

while (player1Score < 3 && player2Score < 3) {
  const player1Weapon = weapons[Math.floor(Math.random() * weapons.length)];
  const player2Weapon = weapons[Math.floor(Math.random() * weapons.length)];

  console.log(player1, "plays", player1Weapon);
  console.log(player2, "plays", player2Weapon);

  if (player1Weapon === player2Weapon) {
    // Players Tied
    console.log("Tie");
  } else if (winConditions[player1Weapon] === player2Weapon) {
    // Player One Wins
    console.log("Player 1 Wins");
    player1Score++;
  } else {
    // Player Two Wins
    console.log("Player 2 Wins");
    player2Score++;
  }
}

let winner;
if (player1Score === 3) {
  winner = player1;
} else {
  winner = player2;
}
console.log(winner, "wins the game!");
