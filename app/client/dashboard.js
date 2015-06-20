var displayName= function() {
  return Meteor.user().services.facebook.first_name;
};

var displayPicture = function() {
  return Meteor.user().services.facebook.profile;
};



Template.dashboard.helpers({
    userName : displayName,
    profile: displayPicture,
    images: function() {
        return Images.find();
    },
});

