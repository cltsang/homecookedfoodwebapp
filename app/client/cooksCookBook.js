/**
 * Created by stephenparker on 21/06/2015.
 */

if(Meteor.isClient){
    Template.myCookBook.helpers({
        displayChefsMeals: function(){
            var allMeals = Meals.find().fetch();
            var myMeals = [];
            for (i = 0; i<allMeals.length; i++){
                if(allMeals[i].cookId == Meteor.userId()){
                    myMeals.push(allMeals[i]);
                }
            }
            console.log(myMeals);
        }
    })
}
