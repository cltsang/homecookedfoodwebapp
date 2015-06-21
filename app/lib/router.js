Router.configure({
  layoutTemplate: 'homeyEatLayout',
  homeyCookLayout: 'homeyCookLayout'
});

Router.onBeforeAction(function() {
    GoogleMaps.load();
    this.next();
}, { only: ['dashboard'] });

Router.route('/', function() {
  this.render('landingPage', {
    //
  });
});

Router.route('/create', function(){
  this.render('createMeal')
  this.layout('homeyCookLayout');
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

Router.route('/confirmation/:_id', {
  action: function () {
    var currentOrder = Orders.findOne({_id: this.params._id});
    Session.set('orderId', currentOrder);
    this.render('thankYou');
  }
});

Router.route('/cookbook', function() {
  this.render('myCookBook');
  this.layout('homeyCookLayout');
});