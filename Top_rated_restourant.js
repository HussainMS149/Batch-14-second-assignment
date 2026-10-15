function topRatedRestaurant(restaurants) {

if (restaurants.length === 0) 
{
    return "Invalid";
}

let topReted = restaurants[0];

for (let i = 1; i < restaurants.length; i++)
    {
    for (let key in restaurants[i]) 
        {
            if (!Object.hasOwn(restaurants[i], key)) continue;
              else if(restaurants[i].rating > topReted.rating)
                {
                  topReted = restaurants[i];
                }
        }  
    }
    return topReted.name.toUpperCase();
    
}

let restaurants = [{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}, {name:"PizzaBurg",rating:5}];

console.log(topRatedRestaurant(restaurants));
