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



