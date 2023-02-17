class Breakfast{
    constructor(food,drink) {
        this.food = food;
        this.drink = drink;
    }
}
breakfast1 = new Breakfast("oatmeal", "coffee");
breakfast2 = new Breakfast("eggs", "tea");


breakfast1; //=>Breakfast { name: "oatmeal", drink: 'coffee'}
breakfast2; //=> Breakfast { name: "eggs", drink: "tea"}


class Lunch{
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink =drink;
  }
}
lunch1 = new Lunch ("cesar","cheddar", "tea");
lunch2 = new Lunch ("chicken", "tomato", "water");

lunch1;
lunch2; 

class Dinner{
    #dessert;
    constructor(salad,soup,entree,dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert= dessert;
    }
}

dinner1 = new Dinner ("broccolii", "tomato", "chicken", "cake");
dinner2 = new Dinner ("chicken", "tomato", "chicken", "cake");

dinner1; //=> Dinner { #dessert: "tea", salad: "broccolii",
dinner2; //=> Dinner { #dessert: "tea", salad: "broccolii",