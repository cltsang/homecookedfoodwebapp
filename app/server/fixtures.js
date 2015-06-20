if (Meals.find().count() === 0) {
  Meals.insert({
    mealTitle: "Herb Chicken",
    mealDescription: "Roasted Chicken cooked with oregano and served with roasted potatoes",
    mealPrice: 60,
    category: "Western",
    availableToOrder: true,
    numberOfPortions: 4
  });
  Meals.insert({
    mealTitle: "Egg Fried Rice",
    mealDescription: "Brown rice fried in sesame oil with egg, peas, spring onion and chilli",
    mealPrice: 40,
    category: "Asian",
    availableToOrder: true,
    numberOfPortions: 3
  });
  Meals.insert({
    mealTitle: "Singapore Noodles",
    mealDescription: "Fried Vermicelli with chicken, pork, onions, peppers, sesame seeds",
    mealPrice: 60,
    category: "Asian",
    availableToOrder: true,
    numberOfPortions: 4
  });
  Meals.insert({
    mealTitle: "Beef Curry Rice",
    mealDescription: "Japanese Curry Rice with Beef",
    mealPrice: 45,
    category: "Asian",
    availableToOrder: true,
    numberOfPortions: 2
  });
  Meals.insert({
    mealTitle: "Chicken with Cashewnuts",
    mealDescription: "Stir fried chicken breast, cashewnuts, and assorted vegetables",
    mealPrice: 50,
    category: "Asian",
    availableToOrder: true,
    numberOfPortions: 3
  });
}