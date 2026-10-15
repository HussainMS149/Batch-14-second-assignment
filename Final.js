// Problem 01 function

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


// Problem 02 function


function isElevatorSafe(weights) {
  // Here is my code...
  // My own written code...
  let totalWeight = 0;

//Invalid string check.
if(!Array.isArray(weights)){
    return "Invalid";
}

for (let i = 0; i < weights.length; i++) {
    totalWeight += weights[i];
    
}
if (totalWeight <= 400) {
    return true;
}
else {
    return false;
}

}


// Problem 03 function


function calculateAiCost(tokensUsed) {
 let cost = 0;
 if (typeof tokensUsed !== "number") {
    return "Invalid";
 }
 else if (tokensUsed > 500) {
    cost = Math.floor ((tokensUsed-500)/100)*5 ;
    return cost;
 } 
 else if (tokensUsed < 0) {
    return "Invalid";
 }
 else{
     return 0;
 }

}


// Problem 04 function


function topRatedRestaurant(restaurants) {

    if ( !Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }


    let topReted = restaurants[0];
    for (let i = 1; i < restaurants.length; i++) {


        for (let key in restaurants[i]) {

            if(restaurants[i].rating > topReted.rating){
                topReted = restaurants[i];
            }
        }  
    }
    return topReted.name.toUpperCase();
    
}



// Problem 05 function



/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) === false || !times.every(item => typeof item === "number")) {
        return "Invalid";
   }

   if (times.length === 0) {
        return "Invalid";
    }

 let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }

  return total / times.length;
}






