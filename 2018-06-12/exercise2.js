function getHand() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

const player1 = {
  name: "Chris",
  score: 0,
  getHand: getHand,
};
const player2 = {
  name: "Jimmy",
  score: 0,
  getHand: getHand,
};
const weapons = ["rock", "paper", "scissors"];

const winConditions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function playRound(playerA, playerB) {
  const playerAWeapon = playerA.getHand();
  const playerBWeapon = playerB.getHand();

  console.log(playerA.name, "plays", playerAWeapon);
  console.log(playerB.name, "plays", playerBWeapon);

  if (playerAWeapon === playerBWeapon) {
    // Players Tied
    return null;
  } else if (winConditions[playerAWeapon] === playerBWeapon) {
    // Player One Wins
    return playerA;
  } else {
    // Player Two Wins
    return playerB;
  }
}

function playGame(playerA, playerB) {
  while (playerA.score < 3 && playerB.score < 3) {
    const winningPlayer = playRound(playerA, playerB);
    if (winningPlayer) {
      console.log(winningPlayer.name, "won!");
      winningPlayer.score++;
    } else {
        console.log("Its a tie!")
    }
  }

  let winner;
  if (playerA.score === 3) {
    winner = playerA;
  } else {
    winner = playerB;
  }
  console.log(winner.name, "wins the game!");
}

console.log(playGame(player1, player2));
