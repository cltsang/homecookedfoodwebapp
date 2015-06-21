/**
 * Created by stephenparker on 20/06/2015.
 */

var newMealId = function() {
    var maxId = Meals.findOne({}, {sort: {id: -1}}).id;
    var newId = (parseInt(maxId) + 1).toString();
    return newId;
}

var imageId;


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
                var image = template.find('#meal-pic-selector').value
                if(!image){
                    console.log("You haven't chosen a picture to upload");
                } else {
                    mealObject.id = newMealId();
                    mealObject.title = mealName;
                    //mealObject.mealDescription = mealDescription;
                    mealObject.ingredientIds = ['0','1',];
                    mealObject.price = mealPrice;
                    mealObject.cookId = Meteor.userId();

                    mealObject.photoId = imageId;
                    Meals.insert(mealObject);
                    $('#jumbotron-header').text("Meal created!");
                    Router.go('/cookbook')
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
                    file.mealId = newMealId();
                    Images.insert(file, function (err, fileObj) {
                        if (err) {
                            // handle err
                        } else {
                            // do stuff
                            console.log(file);
                            console.log(fileObj);
                            console.log(file.mealId);
                            imageId = fileObj._id;
                            //fileObj.update({$set: {'metadata.mealId': newMealId}});
                        }
                    })
                } else {
                    console.log("non jpg not allowed")
                }
            });

        }
    });
}