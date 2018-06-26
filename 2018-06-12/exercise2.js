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

const hasPlayerWon = (player, roundsToWin) => player.score >= roundsToWin;

function playGame(playerA, playerB, roundsToWin) {
  while (!(hasPlayerWon(playerA, roundsToWin) || hasPlayerWon(playerB, roundsToWin))) {
    const winningPlayer = playRound(playerA, playerB);
    if (winningPlayer) {
      console.log(winningPlayer.name, "won!");
      winningPlayer.score++;
    } else {
      console.log("Its a tie!");
    }
  }

  let winner;
  if (hasPlayerWon(playerA, roundsToWin)) {
    winner = playerA;
  } else {
    winner = playerB;
  }
  console.log(winner.name, "wins the game!");
}

console.log(playGame(player1, player2, 5));
