Ingredients = new Mongo.Collection("ingredients");

var ingredientSchema = new SimpleSchema({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        max: 100,
    },
});

Ingredients.attachSchema(ingredientSchema);

var getIngredient = function(ingredientId) {
    var ingredient = Ingredients.findOne({id: ingredientId});
    return ingredient;
};
