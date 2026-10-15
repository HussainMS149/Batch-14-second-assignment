function calculateAiCost(tokensUsed) {
 let cost = 0;
 if (typeof tokensUsed !== "number") {
    return "Invalid";
 }
 else if (tokensUsed > 500) {
    cost = Math.floor ((tokensUsed-500)/100)*5 ;
    return cost;
 } 
 else{
     return 0;
 }

}

let tokenused = 860;
console.log(calculateAiCost(tokenused));

