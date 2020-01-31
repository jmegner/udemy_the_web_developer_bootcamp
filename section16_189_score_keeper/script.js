class Player {
  constructor(id) {
    this.id = id;
    this.scoreSpan = document.getElementById("P" + id + "Score");
    this.incrementBtn = document.getElementById("P" + id + "Increment");
    this.reset();
  }

  reset() {
    this.setScore(0, 1);
  }

  setScore(score, endScore) {
    console.assert(
      !isNaN(parseInt(endScore)),
      "you forgot Player.setScore 2nd arg (endScore)");
    this.score = score;
    this.scoreSpan.textContent = score;
    this.updateScoreStyle(endScore);
  }

  updateScoreStyle(endScore) {
    this.scoreSpan.style.color
      = this.score >= endScore
      ? "red" : "black";
  }

}

class Game {
  constructor(numPlayers) {
    this.players = Array.from(Array(numPlayers).keys())
      .map(i => new Player(i + 1));
    this.players.forEach(p => p.incrementBtn.addEventListener(
      "click", () => this.incPlayerScore(p.id)));

    this.endScoreSpan = document.getElementById("EndScore");
    this.setEndScore(5);

    this.userEndScoreInput = document.getElementById("UserEndScore");
    this.userEndScoreInput.value = this.endScore;
    this.userEndScoreInput.addEventListener("input", (event) => {
      this.setEndScore(event.target.valueAsNumber);
    });

    this.resetBtn = document.getElementById("Reset");
    this.resetBtn.addEventListener("click", () => {
      this.players.forEach(p => p.reset());
    });
  }

  setEndScore(endScore) {
    this.endScore = endScore;
    this.endScoreSpan.textContent = endScore;
    this.players.forEach(p => p.updateScoreStyle(this.endScore));
  }

  highestScore() {
    var highest = this.players.reduce(
      (accum, player) => Math.max(accum, player.score),
      0);
    return highest;
  }

  incPlayerScore(playerId) {
    if(this.highestScore() < this.endScore) {
      var player = this.players[playerId - 1];
      player.setScore(player.score + 1, this.endScore);
    }
  }

}


(function main() {
  const numPlayers = 2;
  var game = new Game(numPlayers);
})();

