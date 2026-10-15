function matchWinner(teamAGoals, teamBGoals) {
  // Here is my code…
  // This is my own writen code...
  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } 
  else if (teamAGoals < teamBGoals) {
    return "Team B Won";
  }
  else if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
  }
  else{
    return "Draw";
  }
}


let result = matchWinner(5,2);
console.log(result);


