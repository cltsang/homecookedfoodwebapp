if (Meteor.isClient) {

  Template.mealsPage.helpers({

    addedMeals: function() {
      var htmlMeals = [];

      var allMeals = Meals.find().fetch();

      for (i=0; i < allMeals.length; i++) {
        htmlMeals.push(
          '<div class="col-xs-12 col-sm-6 col-md-4 eachMeal">' +
            '<div class="row mealTitle">' +
              '<div class="col-xs-8">' +
                '<h2 class="meals-page-h2">' +
                  allMeals[i].mealTitle +
                '</h2>' +
              '</div>' +
              '<div class="col-xs-4">' +
                '<h3 class="meals-page-h3">' +
                  allMeals[i].mealPrice +
                  '$' +
                '</h3> ' +
              '</div>' +
              '<div class="col-xs-12 image">' +
                '<img class="meal-picture" src="' +
                  allMeals[i].photo +
                  '">' +
              '</div>' +
              '<div class="col-xs-12 cookName">' +
                '<p>Dorgon Samray <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i></p>' +
              '</div>' +
              '<div class="col-xs-12 mealDescription">' +
                '<p>' +
                  allMeals[i].mealDescription +
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


  Meals.find().forEach(addMeals());

    function addMeals() {
      $('.mealsList').children().append(
        '<div class="row">' +
          '<div class="col-xs-6">' +
            '<h2 class="meals-page-h2">Title</h2>' +
          '</div>' +
          '<div class="col-xs-6">' +
            '<h3 class="meals-page-h3">60$</h3> ' +
          '</div>' +
        '</div>' +
        '<div class="row">' +
          '<div class="col-xs-12">' +
            '<img class="meal-picture" src="image.jpg alt="an image here">' +
          '</div>' +
          '<div class="col-xs-12">' +
            '<p class="meals-page-p">Chefname</p>' +
          '</div>' +
          '<div class="col-xs-12">' +
            '<p class="meals-page-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' +
          '</div>' +
          '<div class="col-xs-12">' +
            'Delivered @ 7PM' +
          '</div>' +
          '<div class="col-xs-12">' +
            '3 hours left to order' +
          '</div>' +
          '<div class="col-xs-12">' +
            '<button type="button" class="btn btn-default btn-lg">Order Now</button>' +
          '</div>' +
        '</div>');
    }

}