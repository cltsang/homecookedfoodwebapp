Meals = new Mongo.Collection("meals");

var mealSchema = new SimpleSchema({
    id: {
        type: String,
        unique: true,
    },
    title: {
        type: String,
        unique: false,
    },
    ingredientIds: {
        type: [String],
    },
    price: {
        type: Number,
        decimal: false,
        min: 10,
        max: 999,
    },
    photoPath: {
        type: String,
        optional: true,
    },
    photoId: {
        type: String,
        optional: true,
    },
    cookId: {
        type: String,
    },
});

Meals.attachSchema(mealSchema);

var getIngredientsByMeal = function(mealId) {
    var meal = Meals.findOne({id: mealId});
    var ingredientCount = {meal:ingredientIds}.count();
    var ingredients = {};
    for (var i = 0; i < ingredientCount; i++) {
        var ingredient = getIngredient({meal: ingredientIds}[i]);
        ingredients.append(ingredient);
    }
    return ingredients;
};

var getMealsByCook = function(cookId) {
    var meals = Meals.find({cookId: cookId});
    return meals;
};
