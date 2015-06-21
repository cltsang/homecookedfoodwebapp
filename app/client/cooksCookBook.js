/**
 * Created by stephenparker on 21/06/2015.
 */

if(Meteor.isClient){
    Template.myCookBook.helpers({
        displayChefsMeals: function(){
            var allMeals = Meals.find().fetch();
            var myMeals = [];
            for (var i = 0; i<allMeals.length; i++){
                if(allMeals[i].cookId == Meteor.userId()){
                    var imagePath = Images.findOne({_id: allMeals[i].photoId});
                    myMeals.push(allMeals[i]);
                    myMeals[myMeals.length -1].photoPath = imagePath.url();

                }
            }
            return myMeals
        }
    })
}
