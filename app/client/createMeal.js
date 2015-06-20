/**
 * Created by stephenparker on 20/06/2015.
 */


if (Meteor.isClient) {


    Template.createMeal.created = function(){
        this.fileUploaded = new ReactiveVar(false)
    };

    var displayName= function() {
        return Meteor.user().services.facebook.first_name;
    };


    Template.createMeal.helpers({
        userName : displayName,
        images: function() {
            if(Template.instance().fileUploaded.get() == false){
                console.log(Template.instance().fileUploaded.get())
                return
            } else {
                return Images.find({}, {sort: {uploadedAt: -1}, limit: 1});
            }
        }
    });

    Template.createMeal.events({
        'click #submit-meal': function(event, template){
            var mealObject = {};
            var mealName = template.find('#meal-name-input').value;
            var mealDescription = template.find('#meal-description-input').value;
            var mealPrice = template.find('#meal-price-input').value;

            if(mealName.length > 4 && mealDescription.length > 4 && mealPrice > 0){
                if(!template.find('#meal-pic-selector').value){
                    console.log("You haven't chosen a picture to upload");
                } else {
                    mealObject.mealTitle = mealName;
                    mealObject.mealDescription = mealDescription;
                    mealObject.mealPrice = mealPrice;
                    Meals.insert(mealObject);
                    $('#jumbotron-header').text("Meal created!");
                }
            } else {
                $('#jumbotron-header').text("One or more of your submitted fields was incorrect!");
            }
        },

        'change .myFileInput': function(event, template) {
            Template.instance().fileUploaded.set(true);
            console.log("after upload: " + Template.instance().fileUploaded.get());
            FS.Utility.eachFile(event, function(file){
                if (file.type == "image/jpeg"){
                    file.test = "test";
                    Images.insert(file, function (err, fileObj) {

                        if (err) {
                            // handle err
                        } else {
                            // do stuff
                            console.log(file);
                            fileObj.update({$set: {'metadata.mealId': 'something'}});
                        }
                    })
                } else {
                    console.log("non jpg not allowed")
                }
            });

        }
    });
}