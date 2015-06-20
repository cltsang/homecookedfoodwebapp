if (Meteor.isClient) {

  Template.mealsPage.helpers({

    addedMeals: function() {
      var htmlMeals = [];

      var allMeals = Meals.find().fetch();
      console.log(allMeals);

      for (i=0; i < allMeals.length; i++) {
        htmlMeals.push(
          '<div class="row">' +
            '<div class="col-xs-6">' +
              '<h2>Title</h2>' +
            '</div>' +
            '<div class="col-xs-6">' +
              '<h3>60$</h3> ' +
            '</div>' +
          '</div>' +
          '<div class="row">' +
            '<div class="col-xs-12">' +
              '<img src="image.jpg alt="an image here">' +
            '</div>' +
            '<div class="col-xs-12">' +
              '<p>Chefname</p>' +
            '</div>' +
            '<div class="col-xs-12">' +
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' +
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

      return htmlMeals;
    }

  });


  Meteor.meals.find().forEach(addMeals());

    function addMeals() {
      $('.mealsList').children().append(
        '<div class="row">' +
          '<div class="col-xs-6">' +
            '<h2>Title</h2>' +
          '</div>' +
          '<div class="col-xs-6">' +
            '<h3>60$</h3> ' +
          '</div>' +
        '</div>' +
        '<div class="row">' +
          '<div class="col-xs-12">' +
            '<img src="image.jpg alt="an image here">' +
          '</div>' +
          '<div class="col-xs-12">' +
            '<p>Chefname</p>' +
          '</div>' +
          '<div class="col-xs-12">' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' +
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