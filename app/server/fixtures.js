var insertValidation = function (error, result) {
  if(null != error) {
    console.log(error.invalidKeys);
  };
};

if (Ingredients.find().count() === 0) {
  Ingredients.insert({
    id: "0",
    name: "herb",
  }, insertValidation);
  Ingredients.insert({
    id: "1",
    name: "chicken",
  }, insertValidation);
  Ingredients.insert({
    id: "2",
    name: "egg",
  }, insertValidation);
  Ingredients.insert({
    id: "3",
    name: "rice",
  }, insertValidation);
  Ingredients.insert({
    id: "4",
    name: "noodles",
  }, insertValidation);
  Ingredients.insert({
    id: "5",
    name: "curry",
  }, insertValidation);
  Ingredients.insert({
    id: "6",
    name: "beef",
  }, insertValidation);
  Ingredients.insert({
    id: "7",
    name: "cashewnut",
  }, insertValidation);
};

if (Cooks.find().count() === 0) {
  Cooks.insert({
    id: "0",
    name: "Songyee Park",
    profilePicPath: "https://avatars1.githubusercontent.com/u/8591546?v=3&s=400",
  }, insertValidation);
};

if (Users.find().count() === 0) {
  Users.insert({
    id: "0",
    name: "Stephen Parker",
    profilePicPath: "https://avatars2.githubusercontent.com/u/8068616?v=3&s=460",
  }, insertValidation);
};

if (Meals.find().count() === 0) {
  Meals.insert({
    id: "0",
    title: "Herb Chicken",
    ingredientIds: [
      "0", "1",
    ],
    price: 60,
    photoPath: "http://3.bp.blogspot.com/-94gzUBBb568/T_msmJLf8OI/AAAAAAAACYo/Jkz-7H2LKcs/s1600/IMG_4636.JPG",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "1",
    title: "Egg Fried Rice",
    ingredientIds: [
      "2", "3",
    ],
    price: 60,
    photoPath: "http://farm1.static.flickr.com/169/464594323_a7bad3d728_o.jpg",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "2",
    title: "Singapore Noodles",
    ingredientIds: [
      "4", "5",
    ],
    price: 60,
    photoPath: "http://www.curiousnut.com/wp-content/uploads/2015/01/Wonton-Noodles.jpg",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "3",
    title: "Beef Curry Rice",
    ingredientIds: [
      "3", "5", "6"
    ],
    price: 60,
    photoPath: "http://japaneseexperts.net/wp/wp-content/uploads/2015/06/ryusei-japanese-curry.jpeg",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "4",
    title: "Chicken with Cashewnuts",
    ingredientIds: [
      "1", "7",
    ],
    price: 60,
    photoPath: "http://www.supermeal.pk/ext-resources/cropped-images/000/046/000046346_chicken-with-roasted-chasew-nut.jpg",
    cookId: "0",
  }, insertValidation);
};
