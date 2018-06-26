var players = [
  { firstName: "Cam", lastName: "Newton", position: "QB", touchdowns: 32 },
  { firstName: "Derek", lastName: "Anderson", position: "QB", touchdowns: 0 },
  {
    firstName: "Jonathan",
    lastName: "Stewart",
    position: "RB",
    touchdowns: 12,
  },
  { firstName: "Mike", lastName: "Tolbert", position: "RB", touchdowns: 8 },
  { firstName: "Fozzy", lastName: "Whittaker", position: "RB", touchdowns: 3 },
  { firstName: "Ted", lastName: "Ginn", position: "WR", touchdowns: 9 },
  { firstName: "Devin", lastName: "Funchess", position: "WR", touchdowns: 2 },
];

// ======================================

const isPosition = position => player => player.position === position;

const isRb = isPosition("RB");
const scoredAtLeast = score => player => player.touchdowns > score;
const formatPlayerName = player => `${player.firstName} ${player.lastName}`;

// 1.
// console.log(players.find(item => item.firstName === "Mike"));

// 2.
// const runningBacks = players.filter(isRb);
// console.log(runningBacks);

// 3.
// const lastNames = players.map(player => player.lastName)
// console.log(lastNames)

// 4.
const runningBacks = players
  .filter(isPosition("QB"))
  .filter(scoredAtLeast(5))
  .map(formatPlayerName);
console.log(runningBacks);

// 5.
// const totalRBTouchdowns = players
//   .filter(player => player.position === "RB")
//   .reduce((tds, player) => tds + player.touchdowns, 0);

// console.log(totalRBTouchdowns);
