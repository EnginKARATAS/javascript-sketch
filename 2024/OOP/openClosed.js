//bad
function refreshManaCyristal(player) {
  if (player === "client") console.log("do something");
  else if (player === "enemy") console.log("do another thing");
}

//open closed
function refreshManaCyristals(player) {
  //tek satır
  console.log(players["player"]);
}

const players = {
  player: playerRefresh,
  enemy: enemyRefresh,
};

const playerRefresh = (player) => {
  return "player";
};
const enemyRefresh = (enemy) => {
  return "enemy";
};
