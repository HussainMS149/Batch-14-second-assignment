function matchWinner(teamAGoals, teamBGoals) {
  // Here is my code…
  // This is my own writen code...
if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
   }
   
else if (teamAGoals > teamBGoals) {
             return "Team A Won";
        } 

else if (teamAGoals < teamBGoals) {
          return "Team B Won";
        }
        
else{
    return "Draw";
  }
}





