if (Meteor.isClient) {

  Template.mealsPage.helpers({
      addedMeals: function () {
          var htmlMeals = [];
          var allMeals = Meals.find().fetch();

          for (i = 0; i < allMeals.length; i++) {
              var meal = allMeals[i];
              var cook = Cooks.findOne({id: meal.cookId});

              var photoHtml = meal.photoPath
              if (!photoHtml) {
                  var image = Images.findOne({_id: meal.photoId});
                  photoHtml = image.url();
              }

              htmlMeals.push(
                  '<div class="col-xs-12 col-sm-6 col-md-4 eachMeal">' +
                  '<div class="row mealTitle">' +
                  '<div class="col-xs-8">' +
                  '<h2 class="meals-page-h2">' +
                  meal.title +
                  '</h2>' +
                  '</div>' +
                  '<div class="col-xs-4">' +
                  '<h3 class="meals-page-h3">' +
                  meal.price +
                  '$' +
                  '</h3> ' +
                  '</div>' +
                  '<div class="col-xs-12 image">' +
                  '<img class="meal-picture" src="' +
                  photoHtml +
                  '">' +
                  '</div>' +
                  '<div class="col-xs-12 cookName">' +
                  '<p>'+ cook.name +' <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i></p>' +
                  '</div>' +
                  '<div class="col-xs-12 mealDescription">' +
                  '<p>' +
                  meal.ingredientIds +
                  '</p>' +
                  '</div>' +
                  '<div class="col-xs-12 delivered">' +
                  'Delivered @ ' +
                  '9PM' +
                  '</div>' +
                  '<div class="col-xs-12">' +
                  '2' +
                  'hours left to order' +
                  '</div>' +
                  '<div class="col-xs-12">' +
                  '<button type="button" class="btn btn-default">Order Now</button>' +
                  '</div>' +
                  '</div>' +
                  '</div>');
          }

          return htmlMeals;
      }
  });
}

$(function () {
  $('[data-toggle="popover"]').popover()
})