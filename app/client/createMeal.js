/**
 * Created by stephenparker on 20/06/2015.
 */
var displayName= function() {
    return Meteor.user().services.facebook.first_name;
};

Template.createMeal.helpers({
    userName : displayName
})

Template.createMeal.events({
    'click #submit-meal': function(event, template){
        var mealObject = {};
        var mealName = template.find('#meal-name-input').value;
        var mealDescription = template.find('#meal-description-input').value;
        var mealPrice = template.find('#meal-price-input').value;

        if(mealName.length > 4 && mealDescription.length > 4 && mealPrice > 0){
            mealObject.mealTitle = mealName;
            mealObject.mealDescription = mealDescription;
            mealObject.mealPrice = mealPrice;
            Meals.insert(mealObject)
            $('#jumbotron-header').text("Meal created!");
        } else {
            $('#jumbotron-header').text("One or more of your submitted fields was incorrect!");
        }
    }
});