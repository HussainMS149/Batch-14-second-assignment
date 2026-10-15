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

let restaurants = [{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}, {name:"PizzaBurg",rating:5}];
// let restaurants = [];



console.log(topRatedRestaurant(restaurants));
