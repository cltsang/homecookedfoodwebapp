Router.configure({

});

Router.route('/', function() {
  this.render('landingPage', {
    //
  });
});

Router.route('/dashboard', function() {
  this.render('dashboard', {
    //
  });
});