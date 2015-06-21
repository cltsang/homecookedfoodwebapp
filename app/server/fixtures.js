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

if (Addresses.find().count() === 0) {
  Addresses.insert({
    id: "0",
    longAddress: "",
    lat:22.2832,
    long: 114.1350,
  }, insertValidation);
  Addresses.insert({
    id: '1',
    longAddress: "",
    lat: 22.2842,
    long: 114.1378,
  }, insertValidation)
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
    profilePicPath: "https://avatars2.githubusercontent.com/u/8068616?v=3&s=400",
  }, insertValidation);
  Users.insert({
    id: "1",
    name: "Xavi Lozano Segarra",
    profilePicPath: "https://avatars2.githubusercontent.com/u/3646960?v=3&s=400",
  }, insertValidation);
  Users.insert({
    id: "2",
    name: "Long Tsang",
    profilePicPath: "https://avatars0.githubusercontent.com/u/4643855?v=3&s=400",
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
  Meals.insert({
    id: "5",
    title: "Hearty Curry Laksa",
    ingredientIds : [
      "1"," 2"
    ],
    price: 50,
    photoPath: "http://media.themalaysianinsider.com/assets/uploads/articles/Curry_noodles_1.jpg",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "6",
    title: "Somtam with Vegetables",
    ingredientIds : [
      "1"," 3"
    ],
    price: 40,
    photoPath: "http://www.eatingthaifood.com/wp-content/uploads/2011/04/vegetables1.jpg",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "7",
    title: "Tom Yum Goong",
    ingredientIds : [
      "1"," 6"
    ],
    price: 40,
    photoPath: "http://www.boomboomme.com/thailand/newbie/images/diet_07.jpg",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "8",
    title: "Pad Thai",
    ingredientIds : [
      "1"," 6"
    ],
    price: 50,
    photoPath: "http://cornerbistrochiangmai.com/wp-content/uploads/2015/04/pad-thai.jpg",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "9",
    title: "Vegetable Lasagna",
    ingredientIds : [
      "1"," 2"
    ],
    price: 60,
    photoPath: "http://www.barilla.com/bulk_imported/A0_RI_ID1849.png",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "10",
    title: "Korean Style Seafood Ramen",
    ingredientIds : [
      "2"," 4"
    ],
    price: 50,
    photoPath: "http://www.mrstyleking.com/wp-content/uploads/2013/10/Best-Most-Authentic-Korean-Restaurant-Food-In-Singapore-6.jpg",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "11",
    title: "Rice and Chicken Burger",
    ingredientIds : [
      "2"," 4"
    ],
    price: 50,
    photoPath: "http://4.bp.blogspot.com/-46itb460K1U/Ts_M4TlNghI/AAAAAAAABsE/RnAmEEN5IBQ/s1600/Oz_Taw_401.jpg",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "12",
    title: "Spicy Noodles with Spring Onions",
    ingredientIds : [
      "1"," 4"
    ],
    price: 40,
    photoPath: "http://farm4.staticflickr.com/3715/9716487855_5d9dd903d2_c.jpg",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "13",
    title: "Burmese Nibban Zay",
    ingredientIds : [
      "2"," 4"
    ],
    price: 40,
    photoPath: "http://sinosoul.com/wp-content/uploads/2010/07/IMG_0308.JPG",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "14",
    title: "Softie Dumplings",
    ingredientIds : [
      "4"," 5"
    ],
    price: 50,
    photoPath: "http://photos.nomadicnotes.com/img/s7/v157/p2473090-4.jpg",
    cookId: "0",
  }, insertValidation);
  Meals.insert({
    id: "15",
    title: "Home Bento Deluxe",
    ingredientIds : [
      "2"," 4"
    ],
    price: 80,
    photoPath: "http://tokyodesu.com/wp-content/uploads/2013/02/800px-bento_de_luxe.jpg",
    cookId: "0",
  }, insertValidation);
};
