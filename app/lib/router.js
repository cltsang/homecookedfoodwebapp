Router.configure({
  layoutTemplate: 'homeyEatLayout',
  homeyCookLayout: 'homeyCookLayout'
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

Router.route('/dashboard', function() {
  this.render('dashboard')
  this.layout('homeyCookLayout');
});