var wins = 0;
var losses = 0;

document.getElementById('wins').innerHTML = wins;

document.getElementById('losses').innerHTML = losses;

function raiseWins() {
  wins += 1;
  document.getElementById('wins').innerHTML = wins;
}

function lowerWins() {
  wins -= 1;
  document.getElementById('wins').innerHTML = wins;
}

function raiseLosses() {
  losses += 1;
  document.getElementById('losses').innerHTML = losses;
}

function lowerLosses() {
  losses -= 1;
  document.getElementById('losses').innerHTML = losses;
}

function resetWins() {
  wins = 0;
  document.getElementById('wins').innerHTML = wins;
}

function resetLosses() {
  losses = 0;
  document.getElementById('losses').innerHTML = losses;
}
