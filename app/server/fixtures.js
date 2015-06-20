var insertValidation = function (error, result) {
  if(null != error) {
    console.log(error.invalidKeys);
  }
};

if (Meals.find().count() === 0) {
  Meals.insert({
    mealTitle: "Herb Chicken",
    mealDescription: "Roasted Chicken cooked with oregano and served with roasted potatoes",
    mealPrice: 60,
    availableToOrder: true,
    numberOfPortions: 4,
    photo: "http://3.bp.blogspot.com/-94gzUBBb568/T_msmJLf8OI/AAAAAAAACYo/Jkz-7H2LKcs/s1600/IMG_4636.JPG",
    orderBy: "2015-06-21T19:00:00+19:00",
    deliverBy: "2015-06-21T19:00:00+19:00"
  }, insertValidation(error, result));
  Meals.insert({
    mealTitle: "Egg Fried Rice",
    mealDescription: "Brown rice fried in sesame oil with egg, peas, spring onion and chilli",
    mealPrice: 40,
    availableToOrder: true,
    numberOfPortions: 3,
    photo: "http://farm1.static.flickr.com/169/464594323_a7bad3d728_o.jpg",
    orderBy: "2015-06-21T17:00:00+17:00",
    deliverBy: "2015-06-21T19:00:00+19:00"
  }, insertValidation(error, result));
  Meals.insert({
    mealTitle: "Singapore Noodles",
    mealDescription: "Fried Vermicelli with chicken, pork, onions, peppers, sesame seeds",
    mealPrice: 60,
    availableToOrder: true,
    numberOfPortions: 4,
    photo: "http://www.curiousnut.com/wp-content/uploads/2015/01/Wonton-Noodles.jpg",
    orderBy: "2015-06-21T18:00:00+18:00",
    deliverBy: "2015-06-21T19:00:00+19:00"
  }, insertValidation(error, result));
  Meals.insert({
    mealTitle: "Beef Curry Rice",
    mealDescription: "Japanese Curry Rice with Beef",
    mealPrice: 45,
    availableToOrder: true,
    numberOfPortions: 2,
    photo: "http://japaneseexperts.net/wp/wp-content/uploads/2015/06/ryusei-japanese-curry.jpeg",
    orderBy: "2015-06-21T17:00:00+17:00",
    deliverBy: "2015-06-21T18:00:00+18:00"
  }, insertValidation(error, result));
  Meals.insert({
    mealTitle: "Chicken with Cashewnuts",
    mealDescription: "Stir fried chicken breast, cashewnuts, and assorted vegetables",
    mealPrice: 50,
    availableToOrder: true,
    numberOfPortions: 3,
    photo: "http://www.supermeal.pk/ext-resources/cropped-images/000/046/000046346_chicken-with-roasted-chasew-nut.jpg",
    orderBy: "2015-06-21T16:00:00+16:00",
    deliverBy: "2015-06-21T19:00:00+19:00"
  }, insertValidation(error, result));
}