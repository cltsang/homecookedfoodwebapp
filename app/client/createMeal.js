/**
 * Created by stephenparker on 20/06/2015.
 */
var displayName= function() {
    return Meteor.user().services.facebook.first_name;
};

Template.createMeal.helpers({
    userName : displayName,
    images: function() {
        return Images.find();
    }
});

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
            mealObject.orderBy = Date();
            mealObject.deliverBy = Date();
            mealObject.availableToOrder = true;
            Meals.insert(mealObject, function (error, result) {
                if(null != error) {
                    console.log(error.invalidKeys);
                }
            });
            $('#jumbotron-header').text("Meal created!");
        } else {
            $('#jumbotron-header').text("One or more of your submitted fields was incorrect!");
        }
    },

    'change .myFileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file){
            Images.insert(file, function (err, fileObj) {
                if (err) {
                    // handle err
                } else {
                    console.log(Images.find().fetch())

                }
            })
        })
    }
});