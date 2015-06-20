Router.configure({

});

Router.route('/', function() {
  this.render('landingPage', {
    //
  });
});

Router.route('/create', function(){
  this.render('createMeal', {
    //
  });
});

Router.route('/meals', function() {
  this.render('mealsPage', {
    //
  });
});